package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

/**
 * Created by popikyardo on 9/14/16.
 */
public class CustomerAccountDeleted extends CustomerEvent {

  private String accountId;

  public CustomerAccountDeleted() {
  }

  public CustomerAccountDeleted(String accountId) {
    this.accountId = accountId;
  }

  public String getAccountId() {
    return accountId;
  }

  public void setAccountId(String accountId) {
    this.accountId = accountId;
  }
}
