package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;


import net.chrisrichardson.eventstore.Event;

import java.math.BigDecimal;

public class AccountOpenedEvent implements Event {

  private String customerId;
  private BigDecimal initialBalance;

  private AccountOpenedEvent() {
  }

  public AccountOpenedEvent(String customerId, BigDecimal initialBalance) {
    this.customerId = customerId;
    this.initialBalance = initialBalance;
  }

  public String getCustomerId() {
    return customerId;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }
}
