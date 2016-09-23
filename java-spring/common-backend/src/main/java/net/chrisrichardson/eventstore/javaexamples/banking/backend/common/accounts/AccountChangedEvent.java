package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import java.math.BigDecimal;

public class AccountChangedEvent extends AccountEvent {
  protected BigDecimal amount;
  protected String transactionId;

  public AccountChangedEvent(BigDecimal amount, String transactionId) {
    this.amount = amount;
    this.transactionId = transactionId;
  }

  public AccountChangedEvent() {
  }

  public String getTransactionId() {
    return transactionId;
  }

  public BigDecimal getAmount() {
    return amount;
  }
}
