package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;


public class CreateAccountResponse {
  
  private String accountId;

  public CreateAccountResponse() {
  }

  public CreateAccountResponse(String accountId) {
    this.accountId = accountId;
  }

  public String getAccountId() {
    return accountId;
  }

  public void setAccountId(String accountId) {
    this.accountId = accountId;
  }
}
