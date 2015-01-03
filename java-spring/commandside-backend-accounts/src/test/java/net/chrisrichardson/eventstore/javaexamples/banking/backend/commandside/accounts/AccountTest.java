package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;

import net.chrisrichardson.eventstore.CommandProcessingAggregates;
import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountOpenedEvent;
import org.junit.Assert;
import org.junit.Test;

import java.math.BigDecimal;
import java.util.List;

public class AccountTest {

  @Test
  public void testSomething() {
    Account account = new Account();
    BigDecimal initialBalance = new BigDecimal(512);
    List<Event> events = CommandProcessingAggregates.processToList(account, (AccountCommand)new OpenAccountCommand(initialBalance));

    Assert.assertEquals(1, events.size());
    Assert.assertEquals(AccountOpenedEvent.class, events.get(0).getClass());

    account.applyEvent(events.get(0));

    Assert.assertEquals(initialBalance, account.getBalance());
  }
}
