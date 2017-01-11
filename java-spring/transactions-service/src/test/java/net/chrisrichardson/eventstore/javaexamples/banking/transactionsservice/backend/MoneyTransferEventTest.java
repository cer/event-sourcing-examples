package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend;

import net.chrisrichardson.eventstorestore.javaexamples.testutil.AbstractEntityEventTest;

public class MoneyTransferEventTest extends AbstractEntityEventTest {

  @Override
  protected Class<?> entityClass() {
    return MoneyTransfer.class;
  }

}
