package net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.backend;

import io.eventuate.CompletableFutureUtil;
import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public class CustomerQueryService {

  private CustomerViewRepository querySideCustomerRepository;

  public CustomerQueryService(CustomerViewRepository querySideCustomerRepository) {
    this.querySideCustomerRepository = querySideCustomerRepository;
  }

  public CompletableFuture<QuerySideCustomer> findByCustomerId(String customerId) {
    QuerySideCustomer customer = querySideCustomerRepository.findOne(customerId);
    if (customer == null)
      return CompletableFutureUtil.failedFuture(new EmptyResultDataAccessException(1));
    else
      return CompletableFuture.completedFuture(customer);
  }

  public CompletableFuture<List<QuerySideCustomer>> findByEmail(String email) {
    List<QuerySideCustomer> customers = querySideCustomerRepository.findByEmailLike(email);
    if (customers.isEmpty())
      return CompletableFutureUtil.failedFuture(new EmptyResultDataAccessException(1));
    else
      return CompletableFuture.completedFuture(customers);
  }
}
