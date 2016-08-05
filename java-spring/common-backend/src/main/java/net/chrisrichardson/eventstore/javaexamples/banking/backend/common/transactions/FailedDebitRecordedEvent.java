package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

import io.eventuate.Event;

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
