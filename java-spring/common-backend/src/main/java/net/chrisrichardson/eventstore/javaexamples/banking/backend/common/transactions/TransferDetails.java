package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

/*
case class TransferDetails(fromAccountId : EntityIdentifier, toAccountId : EntityIdentifier, amount : BigDecimal)
 */

import net.chrisrichardson.eventstore.EntityIdentifier;

import java.math.BigDecimal;
import java.util.Date;

public class TransferDetails {

  private EntityIdentifier fromAccountId;
  private EntityIdentifier toAccountId;
  private BigDecimal amount;
  private Date date;
  private String description;

  private TransferDetails() {
  }

  public TransferDetails(EntityIdentifier fromAccountId, EntityIdentifier toAccountId, BigDecimal amount) {
    this(fromAccountId, toAccountId, amount, new Date(), "");
  }

  public TransferDetails(EntityIdentifier fromAccountId, EntityIdentifier toAccountId, BigDecimal amount, Date date, String description) {
    this.fromAccountId = fromAccountId;
    this.toAccountId = toAccountId;
    this.amount = amount;
    this.date = date;
    this.description = description;
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

  public Date getDate() {
    return date;
  }

  public String getDescription() {
    return description;
  }
}
