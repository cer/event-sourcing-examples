package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

import net.chrisrichardson.eventstore.Event;

/**
 * Created by popikyardo on 02.02.16.
 */
public class CustomerCreatedEvent implements Event {

    private String ssn;
    private String phoneNumber;
    private Address address;

    public CustomerCreatedEvent() {
    }

    public CustomerCreatedEvent(String ssn, String phoneNumber, Address address) {
        this.ssn = ssn;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
