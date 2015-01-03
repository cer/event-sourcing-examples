package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import net.chrisrichardson.eventstore.Aggregate;
import net.chrisrichardson.eventstore.EntityIdentifier;

import java.math.BigDecimal;

public class AccountDebitedEvent extends AccountChangedEvent {

  private AccountDebitedEvent() {
  }

  public AccountDebitedEvent(BigDecimal amount, EntityIdentifier transactionId) {
    super(amount, transactionId);
  }

}
