package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import java.math.BigDecimal;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.DecimalMin;

public class CreateMoneyTransferRequest {

  @NotNull
  private String fromAccountId;

  @NotNull
  private String toAccountId;

  @DecimalMin("0.01")
  private BigDecimal amount;

  public CreateMoneyTransferRequest() {
  }

  public CreateMoneyTransferRequest(String fromAccountId, String toAccountId, BigDecimal amount) {
    this.fromAccountId = fromAccountId;
    this.toAccountId = toAccountId;
    this.amount = amount;
  }

  public void setFromAccountId(String fromAccountId) {
    this.fromAccountId = fromAccountId;
  }

  public void setToAccountId(String toAccountId) {
    this.toAccountId = toAccountId;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  public String getFromAccountId() {
    return fromAccountId;
  }

  public String getToAccountId() {
    return toAccountId;
  }

  public BigDecimal getAmount() {
    return amount;
  }
}
