package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import net.chrisrichardson.eventstore.Aggregate;
import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.Event;

public class AccountDebitFailedDueToInsufficientFundsEvent implements Event {
  private EntityIdentifier transactionId;

  private AccountDebitFailedDueToInsufficientFundsEvent() {
  }

  public AccountDebitFailedDueToInsufficientFundsEvent(EntityIdentifier transactionId) {
    this.transactionId = transactionId;
  }

  public EntityIdentifier getTransactionId() {
    return transactionId;
  }
}
