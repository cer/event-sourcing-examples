package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

public class AccountNotFoundException extends RuntimeException {

  public AccountNotFoundException(String accountId) {
    super("Account not found " + accountId);
  }
}
