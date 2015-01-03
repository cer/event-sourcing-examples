package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

/*
case class TransferDetails(fromAccountId : EntityIdentifier, toAccountId : EntityIdentifier, amount : BigDecimal)
 */

import net.chrisrichardson.eventstore.EntityIdentifier;

import java.math.BigDecimal;

public class TransferDetails {

  private EntityIdentifier fromAccountId;
  private EntityIdentifier toAccountId;
  private BigDecimal amount;

  private TransferDetails() {
  }

  public TransferDetails(EntityIdentifier fromAccountId, EntityIdentifier toAccountId, BigDecimal amount) {
    this.fromAccountId = fromAccountId;
    this.toAccountId = toAccountId;
    this.amount = amount;
  }

  public EntityIdentifier getFromAccountId() {
    return fromAccountId;
  }

  public EntityIdentifier getToAccountId() {
    return toAccountId;
  }

  public BigDecimal getAmount() {
    return amount;
  }
}
