package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.DecimalMin;

import java.math.BigDecimal;

public class CreateAccountRequest {

  @NotNull
  @DecimalMin("0")
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
