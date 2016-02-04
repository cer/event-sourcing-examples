package net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;

import java.util.List;

/**
 * Created by Main on 05.02.2016.
 */
public class CustomersQueryResponse {

    private List<CustomerResponse> customers;

    public CustomersQueryResponse() {
    }

    public CustomersQueryResponse(List<CustomerResponse> customers) {
        this.customers = customers;
    }

    public List<CustomerResponse> getCustomers() {
        return customers;
    }

    public void setCustomers(List<CustomerResponse> customers) {
        this.customers = customers;
    }
}
