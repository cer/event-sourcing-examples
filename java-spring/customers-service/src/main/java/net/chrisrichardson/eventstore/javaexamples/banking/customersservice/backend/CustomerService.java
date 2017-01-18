package net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend;


import io.eventuate.AggregateRepository;
import io.eventuate.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;

import java.util.concurrent.CompletableFuture;

public class CustomerService {

  private final AggregateRepository<Customer, CustomerCommand> accountRepository;

  public CustomerService(AggregateRepository<Customer, CustomerCommand> accountRepository) {
    this.accountRepository = accountRepository;
  }

  public CompletableFuture<EntityWithIdAndVersion<Customer>> createCustomer(CustomerInfo customerInfo) {
    return accountRepository.save(new CreateCustomerCommand(customerInfo));
  }

  public CompletableFuture<EntityWithIdAndVersion<Customer>> addToAccount(String customerId, ToAccountInfo toAccountInfo) {
    return accountRepository.update(customerId, new AddToAccountCommand(toAccountInfo));
  }

  public CompletableFuture<EntityWithIdAndVersion<Customer>> deleteToAccount(String customerId, String accountId) {
    return accountRepository.update(customerId, new DeleteToAccountCommand(accountId));
  }
}
