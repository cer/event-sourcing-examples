package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;


import java.math.BigDecimal;

public class OpenAccountCommand implements AccountCommand {

  private BigDecimal initialBalance;

  public OpenAccountCommand(BigDecimal initialBalance) {
    this.initialBalance = initialBalance;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }
}
