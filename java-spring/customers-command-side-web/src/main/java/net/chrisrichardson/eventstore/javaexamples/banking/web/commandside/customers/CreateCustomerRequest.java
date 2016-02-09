package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

import javax.validation.constraints.NotNull;

/**
 * Created by Main on 09.02.2016.
 */
public class CreateCustomerRequest {
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    private CustomerInfo customerInfo;

    public CreateCustomerRequest() {
    }

    public CreateCustomerRequest(String firstName, String lastName, CustomerInfo customerInfo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.customerInfo = customerInfo;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }

    public void setCustomerInfo(CustomerInfo customerInfo) {
        this.customerInfo = customerInfo;
    }
}
