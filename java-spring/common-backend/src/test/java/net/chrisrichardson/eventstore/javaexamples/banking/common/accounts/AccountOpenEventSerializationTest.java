package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;


import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountOpenedEvent;
import net.chrisrichardson.eventstore.json.EventStoreCommonObjectMapping;
import net.chrisrichardson.utils.json.JSonMapper;
import org.junit.Assert;
import org.junit.Test;

import java.math.BigDecimal;
public class AccountOpenEventSerializationTest {


  @Test
  public void shouldSerde() {
    AccountOpenedEvent event = new AccountOpenedEvent(new BigDecimal(55));
    String json = JSonMapper.toJson(event, EventStoreCommonObjectMapping.getObjectMapper());
    System.out.println("json=" + json);

    AccountOpenedEvent event2 = JSonMapper.fromJSon(AccountOpenedEvent.class, json, EventStoreCommonObjectMapping.getObjectMapper());

    Assert.assertEquals(event.getInitialBalance(), event2.getInitialBalance());
  }
}
