package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;


import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

import java.util.Date;

@RestController
@RequestMapping("/transfers")
public class MoneyTransferController {

  private final MoneyTransferService moneyTransferService;

  @Autowired
  public MoneyTransferController(MoneyTransferService moneyTransferService) {
    this.moneyTransferService = moneyTransferService;
  }

  @RequestMapping(method = RequestMethod.POST)
  public CompletableFuture<CreateMoneyTransferResponse> createMoneyTransfer(@Validated @RequestBody CreateMoneyTransferRequest request) {
    TransferDetails transferDetails = new TransferDetails(
            request.getFromAccountId(),
            request.getToAccountId(),
            request.getAmount(),
            new Date(),
            request.getDescription());
    return moneyTransferService.transferMoney(transferDetails)
            .thenApply(entityAndEventInfo -> new CreateMoneyTransferResponse(entityAndEventInfo.getEntityIdAndVersion().getEntityId()));
  }

}
