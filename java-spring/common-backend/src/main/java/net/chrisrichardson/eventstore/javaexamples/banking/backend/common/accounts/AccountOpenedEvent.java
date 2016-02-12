package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;


import net.chrisrichardson.eventstore.Event;

import java.math.BigDecimal;

public class AccountOpenedEvent implements Event {

  private String customerId;
  private String title;
  private BigDecimal initialBalance;

  private AccountOpenedEvent() {
  }

  public AccountOpenedEvent(String customerId, String title, BigDecimal initialBalance) {
    this.customerId = customerId;
    this.title = title;
    this.initialBalance = initialBalance;
  }

  public String getCustomerId() {
    return customerId;
  }

  public String getTitle() {
    return title;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }
}
