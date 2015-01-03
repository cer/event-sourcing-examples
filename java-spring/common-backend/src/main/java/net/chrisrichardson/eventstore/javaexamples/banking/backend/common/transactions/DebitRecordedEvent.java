package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

import net.chrisrichardson.eventstore.Event;

public class DebitRecordedEvent implements Event {
  private TransferDetails details;

  private DebitRecordedEvent() {
  }

  public DebitRecordedEvent(TransferDetails details) {
    this.details = details;
  }

  public TransferDetails getDetails() {
    return details;
  }
}
