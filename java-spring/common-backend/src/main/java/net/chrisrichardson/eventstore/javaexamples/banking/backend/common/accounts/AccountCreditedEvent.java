package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import io.eventuate.Aggregate;


import java.math.BigDecimal;

public class AccountCreditedEvent extends AccountChangedEvent {

  private AccountCreditedEvent() {
  }

  public AccountCreditedEvent(BigDecimal amount, String transactionId) {
    super(amount, transactionId);
  }

}
