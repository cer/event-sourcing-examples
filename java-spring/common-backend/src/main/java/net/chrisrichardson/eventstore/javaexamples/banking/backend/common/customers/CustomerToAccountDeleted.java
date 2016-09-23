package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

public class CustomerToAccountDeleted extends CustomerEvent {

  private String accountId;

  public CustomerToAccountDeleted() {
  }

  public CustomerToAccountDeleted(String accountId) {
    this.accountId = accountId;
  }

  public String getAccountId() {
    return accountId;
  }

  public void setAccountId(String accountId) {
    this.accountId = accountId;
  }
}
