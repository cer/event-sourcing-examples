package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

/**
 * Created by popikyardo on 02.02.16.
 */
public class CustomerCreatedEvent implements Event {

    private CustomerInfo customerInfo;

    public CustomerCreatedEvent() {
    }

    public CustomerCreatedEvent(CustomerInfo customerInfo) {
        this.customerInfo = customerInfo;
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }

    public void setCustomerInfo(CustomerInfo customerInfo) {
        this.customerInfo = customerInfo;
    }
}
