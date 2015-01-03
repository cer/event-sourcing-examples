package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

import net.chrisrichardson.eventstore.Event;

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
