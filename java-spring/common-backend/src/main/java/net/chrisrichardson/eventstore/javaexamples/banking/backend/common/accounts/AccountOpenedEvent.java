package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import java.math.BigDecimal;

public class AccountOpenedEvent extends AccountEvent {

  private String customerId;
  private String title;
  private BigDecimal initialBalance;
  private String description;

  private AccountOpenedEvent() {
  }

  public AccountOpenedEvent(String customerId, String title, BigDecimal initialBalance, String description) {
    this.customerId = customerId;
    this.title = title;
    this.initialBalance = initialBalance;
    this.description = description;
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

  public String getDescription() {
    return description;
  }
}
