package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import java.util.Date;

public class AccountTransactionInfo {

  private String transactionId;
  private String fromAccountId;
  private String toAccountId;
  private long amount;
  private Date date;
  private String description;

  public AccountTransactionInfo() {
  }

  public AccountTransactionInfo(String transactionId, String fromAccountId, String toAccountId, long amount) {
    this(transactionId, fromAccountId, toAccountId, amount, new Date(),  "");
  }

  public AccountTransactionInfo(String transactionId, String fromAccountId, String toAccountId, long amount, Date date, String description) {
    this.transactionId = transactionId;
    this.fromAccountId = fromAccountId;
    this.toAccountId = toAccountId;
    this.amount = amount;
    this.date = date;
    this.description = description;
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

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
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
