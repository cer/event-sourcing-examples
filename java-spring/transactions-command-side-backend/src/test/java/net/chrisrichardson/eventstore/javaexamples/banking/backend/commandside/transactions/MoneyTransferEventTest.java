package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions;


import net.chrisrichardson.eventstorestore.javaexamples.testutil.AbstractEntityEventTest;

public class MoneyTransferEventTest extends AbstractEntityEventTest {

  @Override
  protected Class<?> entityClass() {
    return MoneyTransfer.class;
  }

}
