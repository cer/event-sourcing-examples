package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

public class AccountTransactionInfo {

  private String transactionId;
  private String fromAccountId;
  private String toAccountId;
  private long amount;

  public AccountTransactionInfo() {
  }

  public AccountTransactionInfo(String transactionId, String fromAccountId, String toAccountId, long amount) {
    this.transactionId = transactionId;
    this.fromAccountId = fromAccountId;
    this.toAccountId = toAccountId;
    this.amount = amount;
  }

  public String getTransactionId() {
    return transactionId;
  }

  public void setTransactionId(String transactionId) {
    this.transactionId = transactionId;
  }

  public String getFromAccountId() {
    return fromAccountId;
  }

  public void setFromAccountId(String fromAccountId) {
    this.fromAccountId = fromAccountId;
  }

  public String getToAccountId() {
    return toAccountId;
  }

  public void setToAccountId(String toAccountId) {
    this.toAccountId = toAccountId;
  }

  public long getAmount() {
    return amount;
  }

  public void setAmount(long amount) {
    this.amount = amount;
  }

  @Override
  public boolean equals(Object o) {
    return EqualsBuilder.reflectionEquals(this, o);
  }

  @Override
  public int hashCode() {
    return HashCodeBuilder.reflectionHashCode(this);
  }
}
