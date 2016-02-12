package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;


import java.math.BigDecimal;

public class OpenAccountCommand implements AccountCommand {

  private String customerId;
  private String title;
  private BigDecimal initialBalance;

  public OpenAccountCommand(String customerId, String title, BigDecimal initialBalance) {
    this.customerId = customerId;
    this.title = title;
    this.initialBalance = initialBalance;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }

  public String getCustomerId() {
    return customerId;
  }

  public String getTitle() {
    return title;
  }
}
