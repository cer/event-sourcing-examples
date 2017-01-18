package net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;

public class CreateCustomerCommand implements CustomerCommand {
  private CustomerInfo customerInfo;

  public CreateCustomerCommand(CustomerInfo customerInfo) {
    this.customerInfo = customerInfo;
  }

  public CustomerInfo getCustomerInfo() {
    return customerInfo;
  }
}
