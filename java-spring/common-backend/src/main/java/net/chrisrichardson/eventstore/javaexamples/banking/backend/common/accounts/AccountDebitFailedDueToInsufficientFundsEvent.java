package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import io.eventuate.Event;

public class AccountDebitFailedDueToInsufficientFundsEvent implements Event {
  private String transactionId;

  private AccountDebitFailedDueToInsufficientFundsEvent() {
  }

  public AccountDebitFailedDueToInsufficientFundsEvent(String transactionId) {
    this.transactionId = transactionId;
  }

  public String getTransactionId() {
    return transactionId;
  }
}
