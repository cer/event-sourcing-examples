package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

/**
 * Created by popikyardo on 03.02.16.
 */
public class CustomerInfo {
    private String email;
    private String ssn;
    private String phoneNumber;
    private Address address;

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

    public void setEmail(String email) {
        this.email = email;
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
