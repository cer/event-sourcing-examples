package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;


import java.math.BigDecimal;

public class OpenAccountCommand implements AccountCommand {

  private String customerId;
  private BigDecimal initialBalance;

  public OpenAccountCommand(String customerId, BigDecimal initialBalance) {
    this.initialBalance = initialBalance;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }

  public String getCustomerId() {
    return customerId;
  }
}
