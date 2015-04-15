package net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.accounts;

import java.math.BigDecimal;


public class GetAccountResponse {
  private String accountId;
  private BigDecimal balance;

  public GetAccountResponse() {
  }

  public GetAccountResponse(String accountId, BigDecimal balance) {
    this.accountId = accountId;
    this.balance = balance;
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
}
