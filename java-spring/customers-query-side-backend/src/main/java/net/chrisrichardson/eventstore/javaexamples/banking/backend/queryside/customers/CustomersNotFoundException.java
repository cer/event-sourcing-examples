package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

public class CustomersNotFoundException extends RuntimeException {

  public CustomersNotFoundException() {
    super("Customers not found");
  }
}
