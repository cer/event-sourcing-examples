package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rx.Observable;

@RestController
@RequestMapping("/transfers")
public class MoneyTransferController {

  private final MoneyTransferService moneyTransferService;

  @Autowired
  public MoneyTransferController(MoneyTransferService moneyTransferService) {
    this.moneyTransferService = moneyTransferService;
  }

  @RequestMapping(method = RequestMethod.POST)
  public Observable<CreateMoneyTransferResponse> createMoneyTransfer(@Validated @RequestBody CreateMoneyTransferRequest request) {
    TransferDetails transferDetails = new TransferDetails(
            new EntityIdentifier(request.getFromAccountId()),
            new EntityIdentifier(request.getToAccountId()),
            request.getAmount());
    return moneyTransferService.transferMoney(transferDetails)
            .map(entityAndEventInfo -> new CreateMoneyTransferResponse(entityAndEventInfo.getEntityIdentifier().getId()));
  }

}
