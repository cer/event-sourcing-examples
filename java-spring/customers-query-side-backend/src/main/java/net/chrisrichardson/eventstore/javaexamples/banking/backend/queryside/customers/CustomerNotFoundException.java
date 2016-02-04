package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

public class CustomerNotFoundException extends RuntimeException {

  public CustomerNotFoundException(String customerId) {
    super("Customer not found " + customerId);
  }
}
