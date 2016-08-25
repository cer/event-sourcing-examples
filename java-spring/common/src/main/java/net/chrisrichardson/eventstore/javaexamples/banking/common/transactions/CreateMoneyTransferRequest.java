package net.chrisrichardson.eventstore.javaexamples.banking.common.transactions;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

public class CreateMoneyTransferRequest {

  @NotNull
  private String fromAccountId;

  @NotNull
  private String toAccountId;

  @DecimalMin("0.01")
  private BigDecimal amount;

  private String description;

  public CreateMoneyTransferRequest() {
  }

  public CreateMoneyTransferRequest(String fromAccountId, String toAccountId, BigDecimal amount, String description) {
    this.fromAccountId = fromAccountId;
    this.toAccountId = toAccountId;
    this.amount = amount;
    this.description = description;
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

  public void setDescription(String description) {
    this.description = description;
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

  public String getDescription() {
    return description;
  }
}
