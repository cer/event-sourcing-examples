package net.chrisrichardson.eventstore.javaexamples.banking.common.customers;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

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

    @Override
    public boolean equals(Object o) {
        return EqualsBuilder.reflectionEquals(this, o);
    }

    @Override
    public int hashCode() {
        return HashCodeBuilder.reflectionHashCode(this);
    }
}
