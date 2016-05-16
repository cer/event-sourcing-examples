package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

// import io.eventuate.Event;

import io.eventuate.Event;

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
