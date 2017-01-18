package net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.web;

import net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.backend.AccountService;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.CreateAccountRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.CreateAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.DeleteAccountResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

  private AccountService accountService;

  @Autowired
  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  @RequestMapping(method = RequestMethod.POST)
  public CompletableFuture<CreateAccountResponse> createAccount(@Validated @RequestBody CreateAccountRequest request) {
    return accountService.openAccount(request.getCustomerId(), request.getTitle(), request.getInitialBalance(), request.getDescription())
            .thenApply(entityAndEventInfo -> new CreateAccountResponse(entityAndEventInfo.getEntityId()));
  }

  @RequestMapping(value = "{accountId}", method = RequestMethod.DELETE)
  public CompletableFuture<DeleteAccountResponse> deleteAccount(@PathVariable String accountId) {
    return accountService.deleteAccount(accountId)
            .thenApply(entityAndEventInfo -> new DeleteAccountResponse(accountId));
  }
}
