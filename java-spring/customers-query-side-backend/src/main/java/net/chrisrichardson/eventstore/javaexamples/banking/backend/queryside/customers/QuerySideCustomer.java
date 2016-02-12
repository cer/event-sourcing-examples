package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Name;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;

import java.util.Map;

/**
 * Created by Main on 05.02.2016.
 */
public class QuerySideCustomer extends CustomerInfo {
    private String id;
    private Map<String, ToAccountInfo> toAccounts;

    public QuerySideCustomer(String id, Name name, String email, String ssn, String phoneNumber, Address address, Map<String, ToAccountInfo> toAccounts) {
        super(name, email, ssn, phoneNumber, address);
        this.id = id;
        this.toAccounts = toAccounts;
    }

    public String getId() {
        return id;
    }

    public Map<String, ToAccountInfo> getToAccounts() {
        return toAccounts;
    }
}
