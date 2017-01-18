package net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.web;

import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;

import java.util.List;

/**
 * Created by Main on 05.02.2016.
 */
public class CustomersQueryResponse {

  private List<QuerySideCustomer> customers;

  public CustomersQueryResponse() {
  }

  public CustomersQueryResponse(List<QuerySideCustomer> customers) {
    this.customers = customers;
  }

  public List<QuerySideCustomer> getCustomers() {
    return customers;
  }

  public void setCustomers(List<QuerySideCustomer> customers) {
    this.customers = customers;
  }
}
