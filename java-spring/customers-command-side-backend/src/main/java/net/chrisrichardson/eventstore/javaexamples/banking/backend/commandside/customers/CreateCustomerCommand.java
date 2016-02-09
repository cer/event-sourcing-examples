package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

/**
 * Created by popikyardo on 02.02.16.
 */
public class CreateCustomerCommand implements CustomerCommand {
    private String firstName;
    private String lastName;
    private CustomerInfo customerInfo;

    public CreateCustomerCommand(String firstName, String lastName, CustomerInfo customerInfo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.customerInfo = customerInfo;
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
