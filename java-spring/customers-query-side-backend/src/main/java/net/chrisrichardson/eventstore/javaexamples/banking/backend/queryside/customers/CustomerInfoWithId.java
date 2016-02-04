package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

/**
 * Created by Main on 05.02.2016.
 */
public class CustomerInfoWithId extends CustomerInfo {
    private String id;

    public CustomerInfoWithId(String id, String email, String ssn, String phoneNumber, Address address) {
        super(email, ssn, phoneNumber, address);
        this.id = id;
    }

    public String getId() {
        return id;
    }
}
