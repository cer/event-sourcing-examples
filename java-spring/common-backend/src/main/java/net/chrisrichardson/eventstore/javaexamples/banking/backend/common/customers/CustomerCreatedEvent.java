package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

import net.chrisrichardson.eventstore.Event;

/**
 * Created by popikyardo on 02.02.16.
 */
public class CustomerCreatedEvent implements Event {

    private String socialSecurityNum;
    private String phoneNum;
    private Address address;

    public CustomerCreatedEvent() {
    }

    public CustomerCreatedEvent(String socialSecurityNum, String phoneNum, Address address) {
        this.socialSecurityNum = socialSecurityNum;
        this.phoneNum = phoneNum;
        this.address = address;
    }

    public String getSocialSecurityNum() {
        return socialSecurityNum;
    }

    public void setSocialSecurityNum(String socialSecurityNum) {
        this.socialSecurityNum = socialSecurityNum;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
