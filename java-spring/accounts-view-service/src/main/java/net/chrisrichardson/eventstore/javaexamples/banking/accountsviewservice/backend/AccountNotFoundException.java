package net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend;

public class AccountNotFoundException extends RuntimeException {

  public AccountNotFoundException(String accountId) {
    super("Account not found " + accountId);
  }
}
