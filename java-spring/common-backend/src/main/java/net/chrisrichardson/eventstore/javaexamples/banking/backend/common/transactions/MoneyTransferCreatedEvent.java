package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;


import io.eventuate.Event;

public class MoneyTransferCreatedEvent implements Event {
  private TransferDetails details;

  private MoneyTransferCreatedEvent() {
  }

  public MoneyTransferCreatedEvent(TransferDetails details) {
    this.details = details;
  }

  public TransferDetails getDetails() {
    return details;
  }
}

