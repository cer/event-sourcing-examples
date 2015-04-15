package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;

import java.math.BigDecimal;

public class CreateAccountRequest {

  private BigDecimal initialBalance;

  public CreateAccountRequest() {
  }

  public CreateAccountRequest(BigDecimal initialBalance) {

    this.initialBalance = initialBalance;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }

  public void setInitialBalance(BigDecimal initialBalance) {
    this.initialBalance = initialBalance;
  }
}
