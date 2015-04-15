package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import java.math.BigDecimal;

public class CreateMoneyTransferRequest {

  private String fromAccountId;
  private String toAccountId;
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
