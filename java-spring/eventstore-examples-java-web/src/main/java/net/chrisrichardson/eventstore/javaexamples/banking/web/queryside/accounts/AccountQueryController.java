package net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.accounts;

import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountNotFoundException;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountQueryService;
import net.chrisrichardson.eventstore.javaexamples.banking.web.util.DeferredUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.DeferredResult;
import rx.functions.Func1;

import java.math.BigDecimal;

@RestController
public class AccountQueryController {

  private AccountQueryService accountInfoQueryService;

  @Autowired
  public AccountQueryController(AccountQueryService accountInfoQueryService) {
    this.accountInfoQueryService = accountInfoQueryService;
  }

  @RequestMapping(value="/accounts/{accountId}", method = RequestMethod.GET)
  public DeferredResult<GetAccountResponse> get(@PathVariable String accountId) {
    return DeferredUtils.toDeferredResult(accountInfoQueryService.findByAccountId(new EntityIdentifier(accountId)).map(new Func1<AccountInfo, GetAccountResponse>() {
      @Override
      public GetAccountResponse call(AccountInfo accountInfo) {
        return new GetAccountResponse(accountInfo.getId(), new BigDecimal(accountInfo.getBalance()));
      }
    }));
  }

  @ResponseStatus(value= HttpStatus.NOT_FOUND, reason="account not found")
  @ExceptionHandler(AccountNotFoundException.class)
  public void accountNotFound() {

  }


}
