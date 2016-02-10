package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

import net.chrisrichardson.eventstore.CommandProcessingAggregates;
import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerCreatedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Name;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class CustomerTest {

    @Test
    public void testSomething() {
        Customer customer = new Customer();

        CustomerInfo customerInfo = generateCustomerInfo();

        List<Event> events = CommandProcessingAggregates.processToList(customer, new CreateCustomerCommand(customerInfo));

        Assert.assertEquals(1, events.size());
        Assert.assertEquals(CustomerCreatedEvent.class, events.get(0).getClass());

        customer.applyEvent(events.get(0));
        Assert.assertEquals(customerInfo, customer.getCustomerInfo());
    }

    private CustomerInfo generateCustomerInfo() {
        return new CustomerInfo(
                new Name("John", "Doe"),
                "current@email.com",
                "000-00-0000",
                "1-111-111-1111",
                new Address("street 1",
                        "street 2",
                        "City",
                        "State",
                        "1111111")
        );
    }
}
