package net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend;

import io.eventuate.Event;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerCreatedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateCustomerInfo;

public class CustomerTest {

  @Test
  public void testSomething() {
    Customer customer = new Customer();

    CustomerInfo customerInfo = generateCustomerInfo();

    List<Event> events = customer.process(new CreateCustomerCommand(customerInfo));

    Assert.assertEquals(1, events.size());
    Assert.assertEquals(CustomerCreatedEvent.class, events.get(0).getClass());

    customer.applyEvent(events.get(0));
    Assert.assertEquals(customerInfo, customer.getCustomerInfo());
  }


}
