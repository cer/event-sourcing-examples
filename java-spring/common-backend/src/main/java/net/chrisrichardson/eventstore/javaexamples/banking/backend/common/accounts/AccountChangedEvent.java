package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import net.chrisrichardson.eventstore.Aggregate;
import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.Event;

import java.math.BigDecimal;

public class AccountChangedEvent implements Event {
  protected BigDecimal amount;
  protected EntityIdentifier transactionId;

  public AccountChangedEvent(BigDecimal amount, EntityIdentifier transactionId) {
    this.amount = amount;
    this.transactionId = transactionId;
  }

  public AccountChangedEvent() {
  }

  public EntityIdentifier getTransactionId() {
    return transactionId;
  }

  public BigDecimal getAmount() {
    return amount;
  }
}
