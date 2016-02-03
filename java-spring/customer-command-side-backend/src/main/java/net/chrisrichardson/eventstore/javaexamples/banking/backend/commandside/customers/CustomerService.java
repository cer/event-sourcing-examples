package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;


import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.repository.AggregateRepository;

public class CustomerService {

  private final AggregateRepository<Customer, CustomerCommand> accountRepository;

  public CustomerService(AggregateRepository<Customer, CustomerCommand> accountRepository) {
    this.accountRepository = accountRepository;
  }

  public rx.Observable<EntityWithIdAndVersion<Customer>> createCustomer(CustomerInfo customerInfo) {
    return accountRepository.save(new CreateCustomerCommand(customerInfo));
  }

}
