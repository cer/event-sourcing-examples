package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import java.util.Date;

public class AccountChangeInfo {

  private String changeId;
  private String transactionId;
  private String transactionType;
  private long amount;
  private long balanceDelta;

  public AccountChangeInfo() {
  }

  public AccountChangeInfo(String changeId, String transactionId, String transactionType, long amount, long balanceDelta) {
    this(new Date(), changeId, transactionId, transactionType, amount, balanceDelta);
  }

  public AccountChangeInfo(Date date, String changeId, String transactionId, String transactionType, long amount, long balanceDelta) {
    this.changeId = changeId;
    this.transactionId = transactionId;
    this.transactionType = transactionType;
    this.amount = amount;
    this.balanceDelta = balanceDelta;
  }

  public String getChangeId() {
    return changeId;
  }

  public void setChangeId(String changeId) {
    this.changeId = changeId;
  }

  public String getTransactionId() {
    return transactionId;
  }

  public void setTransactionId(String transactionId) {
    this.transactionId = transactionId;
  }

  public String getTransactionType() {
    return transactionType;
  }

  public void setTransactionType(String transactionType) {
    this.transactionType = transactionType;
  }

  public long getAmount() {
    return amount;
  }

  public void setAmount(long amount) {
    this.amount = amount;
  }

  public long getBalanceDelta() {
    return balanceDelta;
  }

  public void setBalanceDelta(long balanceDelta) {
    this.balanceDelta = balanceDelta;
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
