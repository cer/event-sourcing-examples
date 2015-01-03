package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;

import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.Account;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountService;
import net.chrisrichardson.eventstore.javaexamples.banking.web.util.DeferredUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import rx.functions.Func1;

@RestController
@RequestMapping("/accounts")
public class AccountController {

  private AccountService accountService;

  @Autowired
  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  @RequestMapping(method = RequestMethod.POST)
  public DeferredResult<CreateAccountResponse> createAccount(@RequestBody CreateAccountRequest request) {
    return DeferredUtils.toDeferredResult(accountService.openAccount(request.getInitialBalance()).map(new Func1<EntityWithIdAndVersion<Account>, CreateAccountResponse>() {

      @Override
      public CreateAccountResponse call(EntityWithIdAndVersion<Account> entityAndEventInfo) {
        return new CreateAccountResponse(entityAndEventInfo.getEntityIdentifier().getId());
      }

    }));
  }
}
