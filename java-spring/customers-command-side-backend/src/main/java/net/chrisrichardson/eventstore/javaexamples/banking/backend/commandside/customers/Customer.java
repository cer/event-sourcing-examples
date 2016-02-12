package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.EventUtil;
import net.chrisrichardson.eventstore.ReflectiveMutableCommandProcessingAggregate;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerAddedToAccount;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerCreatedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

import java.util.List;

/**
 * Created by popikyardo on 02.02.16.
 */
public class Customer extends ReflectiveMutableCommandProcessingAggregate<Customer, CustomerCommand> {

    private CustomerInfo customerInfo;

    public List<Event> process(CreateCustomerCommand cmd) {
        return EventUtil.events(new CustomerCreatedEvent(cmd.getCustomerInfo()));
    }

    public List<Event> process(AddToAccountCommand cmd) {
        return EventUtil.events(new CustomerAddedToAccount(cmd.getToAccountInfo()));
    }

    public void apply(CustomerCreatedEvent event) {
        customerInfo = event.getCustomerInfo();
    }

    public void apply(CustomerAddedToAccount event) {
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }
}
