package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;


import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.repository.AggregateRepository;

public class CustomerService {

  private final AggregateRepository<Customer, CustomerCommand> accountRepository;

  public CustomerService(AggregateRepository<Customer, CustomerCommand> accountRepository) {
    this.accountRepository = accountRepository;
  }

  public rx.Observable<EntityWithIdAndVersion<Customer>> createCustomer(CustomerInfo customerInfo) {
    return accountRepository.save(new CreateCustomerCommand(customerInfo));
  }

  public rx.Observable<EntityWithIdAndVersion<Customer>> addToAccount(String customerId, String accountId, String title, String owner) {
    return accountRepository.update(new EntityIdentifier(customerId), new AddToAccountCommand(accountId, title, owner));
  }

}
