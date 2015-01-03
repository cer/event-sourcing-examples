package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;


import net.chrisrichardson.eventstore.Event;

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
