package net.chrisrichardson.eventstore.javaexamples.banking.common.customers;

/**
 * Created by popikyardo on 03.02.16.
 */
public class CustomerInfo {
    protected String email;
    protected String ssn;
    protected String phoneNumber;
    protected Address address;

    public CustomerInfo() {
    }

    public CustomerInfo(String email, String ssn, String phoneNumber, Address address) {
        this.email = email;
        this.ssn = ssn;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public String getEmail() {
        return email;
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
