package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

import java.util.List;

/**
 * Created by Main on 05.02.2016.
 */
public class QuerySideCustomer extends CustomerInfo {
    private String id;
    protected String firstName;
    protected String lastName;
    private List<ToAccountInfo> toAccounts;

    public QuerySideCustomer(String id, String firstName, String lastName, String email, String ssn, String phoneNumber, Address address, List<ToAccountInfo> toAccounts) {
        super(email, ssn, phoneNumber, address);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.toAccounts = toAccounts;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public List<ToAccountInfo> getToAccounts() {
        return toAccounts;
    }
}
