package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.web;


import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.CreateMoneyTransferRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.CreateMoneyTransferResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend.MoneyTransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/transfers")
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
