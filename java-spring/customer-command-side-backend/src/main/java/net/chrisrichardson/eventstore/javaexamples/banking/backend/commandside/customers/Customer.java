package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.EventUtil;
import net.chrisrichardson.eventstore.ReflectiveMutableCommandProcessingAggregate;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerCreatedEvent;

import java.util.List;

/**
 * Created by popikyardo on 02.02.16.
 */
public class Customer extends ReflectiveMutableCommandProcessingAggregate<Customer, CustomerCommand> {
    private String socialSecurityNum;
    private String phoneNum;
    private Address address;

    public List<Event> process(CreateCustomerCommand cmd) {
        return EventUtil.events(new CustomerCreatedEvent(cmd.getSocialSecurityNum(), cmd.getPhoneNum(), cmd.getAddress()));
    }


    public void apply(CustomerCreatedEvent event) {
        socialSecurityNum = event.getSocialSecurityNum();
        phoneNum = event.getPhoneNum();
        address = event.getAddress();
    }
}
