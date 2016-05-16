package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import io.eventuate.Aggregate;


import java.math.BigDecimal;

public class AccountDebitedEvent extends AccountChangedEvent {

  private AccountDebitedEvent() {
  }

  public AccountDebitedEvent(BigDecimal amount, String transactionId) {
    super(amount, transactionId);
  }

}
