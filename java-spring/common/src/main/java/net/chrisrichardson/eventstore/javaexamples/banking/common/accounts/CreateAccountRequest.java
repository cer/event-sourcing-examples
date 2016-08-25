package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

public class CreateAccountRequest {

  @NotNull
  private String customerId;

  private String title;

  private String description;

  @NotNull
  @DecimalMin("0")
  private BigDecimal initialBalance;

  public CreateAccountRequest() {
  }

  public CreateAccountRequest(String customerId, String title, String description, BigDecimal initialBalance) {
    this.customerId = customerId;
    this.title = title;
    this.description = description;
    this.initialBalance = initialBalance;
  }

  public String getCustomerId() {
    return customerId;
  }

  public void setCustomerId(String customerId) {
    this.customerId = customerId;
  }

  public BigDecimal getInitialBalance() {
    return initialBalance;
  }

  public void setInitialBalance(BigDecimal initialBalance) {
    this.initialBalance = initialBalance;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
