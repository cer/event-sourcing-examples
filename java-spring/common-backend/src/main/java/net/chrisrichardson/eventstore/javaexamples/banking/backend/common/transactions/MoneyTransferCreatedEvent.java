package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;


public class MoneyTransferCreatedEvent extends MoneyTransferEvent {
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

