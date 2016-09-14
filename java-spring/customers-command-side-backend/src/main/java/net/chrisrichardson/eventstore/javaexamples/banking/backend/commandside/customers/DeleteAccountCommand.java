package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

/**
 * Created by popikyardo on 9/14/16.
 */
public class DeleteAccountCommand implements CustomerCommand {

  private String accountId;

  public DeleteAccountCommand() {
  }

  public DeleteAccountCommand(String accountId) {
    this.accountId = accountId;
  }

  public String getAccountId() {
    return accountId;
  }

  public void setAccountId(String accountId) {
    this.accountId = accountId;
  }
}
