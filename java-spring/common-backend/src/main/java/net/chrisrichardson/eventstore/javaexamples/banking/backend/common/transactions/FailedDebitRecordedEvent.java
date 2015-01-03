package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

import net.chrisrichardson.eventstore.Event;

public class FailedDebitRecordedEvent implements Event {
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
