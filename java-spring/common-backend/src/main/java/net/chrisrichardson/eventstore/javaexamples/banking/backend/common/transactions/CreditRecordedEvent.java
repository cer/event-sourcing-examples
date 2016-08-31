package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

import io.eventuate.Event;

public class CreditRecordedEvent implements Event {
  private TransferDetails details;

  private CreditRecordedEvent() {
  }

  public CreditRecordedEvent(TransferDetails details) {
    this.details = details;
  }

  public TransferDetails getDetails() {
    return details;
  }
}
