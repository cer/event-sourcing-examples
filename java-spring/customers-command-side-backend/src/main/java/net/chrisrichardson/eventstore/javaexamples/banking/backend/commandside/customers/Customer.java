package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.EventUtil;
import net.chrisrichardson.eventstore.ReflectiveMutableCommandProcessingAggregate;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerCreatedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

import java.util.List;

/**
 * Created by popikyardo on 02.02.16.
 */
public class Customer extends ReflectiveMutableCommandProcessingAggregate<Customer, CustomerCommand> {

    private CustomerInfo customerInfo;


    public List<Event> process(CreateCustomerCommand cmd) {
        return EventUtil.events(new CustomerCreatedEvent(cmd.getFirstName(), cmd.getLastName(), cmd.getCustomerInfo()));
    }

    public void apply(CustomerCreatedEvent event) {
        customerInfo = event.getCustomerInfo();
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }
}
