package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import java.math.BigDecimal;


public class GetAccountResponse {
  private String accountId;
  private BigDecimal balance;
  private String title;
  private String description;

  public GetAccountResponse() {
  }

  public GetAccountResponse(String accountId, BigDecimal balance, String title, String description) {
    this.accountId = accountId;
    this.balance = balance;
    this.title = title;
    this.description = description;
  }

  public void setBalance(BigDecimal balance) {
    this.balance = balance;
  }

  public void setAccountId(String accountId) {
    this.accountId = accountId;
  }

  public String getAccountId() {
    return accountId;
  }

  public BigDecimal getBalance() {
    return balance;
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
