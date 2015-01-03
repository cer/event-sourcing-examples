package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import net.chrisrichardson.eventstore.Aggregate;
import net.chrisrichardson.eventstore.EntityIdentifier;

import java.math.BigDecimal;

public class AccountCreditedEvent extends AccountChangedEvent {

  private AccountCreditedEvent() {
  }

  public AccountCreditedEvent(BigDecimal amount, EntityIdentifier transactionId) {
    super(amount, transactionId);
  }

}
