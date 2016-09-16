package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import io.eventuate.Event;

import java.util.Date;

public class AccountDeletedEvent implements Event {

  private Date timestamp;

  public AccountDeletedEvent() {
  }

  public AccountDeletedEvent(Date timestamp) {
    this.timestamp = timestamp;
  }

  public Date getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Date timestamp) {
    this.timestamp = timestamp;
  }
}
