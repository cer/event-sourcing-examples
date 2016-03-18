package net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.accounts;

import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountNotFoundException;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountQueryService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountTransactionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rx.Observable;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class AccountQueryController {

  private AccountQueryService accountInfoQueryService;

  @Autowired
  public AccountQueryController(AccountQueryService accountInfoQueryService) {
    this.accountInfoQueryService = accountInfoQueryService;
  }

  @RequestMapping(value = "/accounts/{accountId}", method = RequestMethod.GET)
  public Observable<GetAccountResponse> get(@PathVariable String accountId) {
    return accountInfoQueryService.findByAccountId(new EntityIdentifier(accountId))
            .map(accountInfo -> new GetAccountResponse(accountInfo.getId(), new BigDecimal(accountInfo.getBalance()), accountInfo.getTitle(), accountInfo.getDescription()));
  }

  @RequestMapping(value = "/accounts", method = RequestMethod.GET)
  public Observable<List<GetAccountResponse>> getAccountsForCustomer(@RequestParam("customerId") String customerId) {
    return accountInfoQueryService.findByCustomerId(customerId)
            .map(accountInfoList -> accountInfoList.stream().map(accountInfo -> new GetAccountResponse(accountInfo.getId(), new BigDecimal(accountInfo.getBalance()), accountInfo.getTitle(), accountInfo.getDescription())).collect(Collectors.toList()));
  }

  @RequestMapping(value = "/accounts/{accountId}/history", method = RequestMethod.GET)
  public Observable<List<AccountTransactionInfo>> getTransactionsHistory(@PathVariable String accountId) {
    return accountInfoQueryService.findByAccountId(new EntityIdentifier(accountId))
            .map(AccountInfo::getTransactions);
  }

  @ResponseStatus(value= HttpStatus.NOT_FOUND, reason="account not found")
  @ExceptionHandler(AccountNotFoundException.class)
  public void accountNotFound() {

  }


}
