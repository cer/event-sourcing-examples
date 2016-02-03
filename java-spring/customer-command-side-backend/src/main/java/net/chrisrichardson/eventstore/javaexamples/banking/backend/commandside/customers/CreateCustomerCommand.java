package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.Address;

/**
 * Created by popikyardo on 02.02.16.
 */
public class CreateCustomerCommand implements CustomerCommand {

    private String ssn;
    private String phoneNumber;
    private Address address;

    public CreateCustomerCommand(String socialSecurityNum, String phoneNumber, Address address) {
        this.ssn = ssn;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public String getSsn() {
        return ssn;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public Address getAddress() {
        return address;
    }
}
