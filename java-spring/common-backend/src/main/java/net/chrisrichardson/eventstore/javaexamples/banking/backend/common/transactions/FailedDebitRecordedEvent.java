package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;


public class FailedDebitRecordedEvent extends MoneyTransferEvent {
  private TransferDetails details;

  private FailedDebitRecordedEvent() {
  }

  public FailedDebitRecordedEvent(TransferDetails details) {
    this.details = details;
  }

  public TransferDetails getDetails() {
    return details;
  }
}
