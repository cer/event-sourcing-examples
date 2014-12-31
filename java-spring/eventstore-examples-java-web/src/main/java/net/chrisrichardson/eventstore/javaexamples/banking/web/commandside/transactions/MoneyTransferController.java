package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransfer;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.TransferDetails;
import net.chrisrichardson.eventstore.javaexamples.banking.web.util.DeferredUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import rx.functions.Func1;

@RestController
@RequestMapping("/transfers")
public class MoneyTransferController {

  private final MoneyTransferService moneyTransferService;

  @Autowired
  public MoneyTransferController(MoneyTransferService moneyTransferService) {
    this.moneyTransferService = moneyTransferService;
  }

  @RequestMapping(method = RequestMethod.POST)
  public DeferredResult<CreateMoneyTransferResponse> createMoneyTransfer(@RequestBody CreateMoneyTransferRequest request) {
    TransferDetails transferDetails = new TransferDetails(new EntityIdentifier(request.getFromAccountId()), new EntityIdentifier(request.getToAccountId()), request.getAmount());
    return DeferredUtils.toDeferredResult(moneyTransferService.transferMoney(transferDetails).map(new Func1<EntityWithIdAndVersion<MoneyTransfer>, CreateMoneyTransferResponse>() {

      @Override
      public CreateMoneyTransferResponse call(EntityWithIdAndVersion<MoneyTransfer> entityAndEventInfo) {
        return new CreateMoneyTransferResponse(entityAndEventInfo.getEntityIdentifier().getId());
      }

    }));
  }

}
