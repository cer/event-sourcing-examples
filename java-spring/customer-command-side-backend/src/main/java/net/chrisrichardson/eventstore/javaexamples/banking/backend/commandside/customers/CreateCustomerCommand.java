package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.Address;

/**
 * Created by popikyardo on 02.02.16.
 */
public class CreateCustomerCommand implements CustomerCommand {

    private String socialSecurityNum;
    private String phoneNum;
    private Address address;

    public CreateCustomerCommand(String socialSecurityNum, String phoneNum, Address address) {
        this.socialSecurityNum = socialSecurityNum;
        this.phoneNum = phoneNum;
        this.address = address;
    }

    public String getSocialSecurityNum() {
        return socialSecurityNum;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public Address getAddress() {
        return address;
    }
}
