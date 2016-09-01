package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

public class AccountChangeInfo {

  private String changeId;
  private String transactionId;
  private String transactionType;
  private long amount;
  private long balanceDelta;

  public AccountChangeInfo(String changeId, String transactionId, String transactionType, long amount, long balanceDelta) {
    this.changeId = changeId;
    this.transactionId = transactionId;
    this.transactionType = transactionType;
    this.amount = amount;
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
