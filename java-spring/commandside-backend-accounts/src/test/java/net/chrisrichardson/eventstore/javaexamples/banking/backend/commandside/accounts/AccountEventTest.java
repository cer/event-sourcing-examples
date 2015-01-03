package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;


import net.chrisrichardson.eventstorestore.javaexamples.testutil.AbstractEntityEventTest;

public class AccountEventTest extends AbstractEntityEventTest {

  @Override
  protected Class<Account> entityClass() {
    return Account.class;
  }
}