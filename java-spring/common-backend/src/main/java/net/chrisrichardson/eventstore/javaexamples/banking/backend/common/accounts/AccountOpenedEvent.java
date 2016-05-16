package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;


import io.eventuate.Event;

import java.math.BigDecimal;

public class AccountOpenedEvent implements Event {

  private BigDecimal initialBalance;

  private AccountOpenedEvent() {
  }

  public AccountOpenedEvent(BigDecimal initialBalance) {
    this.initialBalance = initialBalance;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }
}
