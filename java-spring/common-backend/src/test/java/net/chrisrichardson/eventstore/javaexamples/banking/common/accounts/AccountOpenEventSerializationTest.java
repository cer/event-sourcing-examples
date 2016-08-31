package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import io.eventuate.javaclient.commonimpl.JSonMapper;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountOpenedEvent;
import org.junit.Assert;
import org.junit.Test;

import java.math.BigDecimal;

public class AccountOpenEventSerializationTest {

  @Test
  public void shouldSerde() {

    AccountOpenedEvent event = new AccountOpenedEvent("00000000-00000000", "My Account", new BigDecimal(55), "");
    String json = JSonMapper.toJson(event);
    System.out.println("json=" + json);

    AccountOpenedEvent event2 = JSonMapper.fromJson(json, AccountOpenedEvent.class);

    Assert.assertEquals(event.getInitialBalance(), event2.getInitialBalance());
  }
}
