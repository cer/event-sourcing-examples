package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import io.eventuate.CompletableFutureUtil;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public class CustomerQueryService {

  private QuerySideCustomerRepository querySideCustomerRepository;

  public CustomerQueryService(QuerySideCustomerRepository querySideCustomerRepository) {
    this.querySideCustomerRepository = querySideCustomerRepository;
  }

  public CompletableFuture<QuerySideCustomer> findByCustomerId(String customerId) {
    QuerySideCustomer customer = querySideCustomerRepository.findOne(customerId);
    if (customer == null)
      return CompletableFutureUtil.failedFuture(new EmptyResultDataAccessException(1));
    else
      return CompletableFuture.completedFuture(customer);
  }

  public CompletableFuture<List<QuerySideCustomer>> findByEmail(String email){
    List<QuerySideCustomer> customers = querySideCustomerRepository.findByEmailLike(email);
    if (customers.isEmpty())
      return CompletableFutureUtil.failedFuture(new EmptyResultDataAccessException(1));
    else
      return CompletableFuture.completedFuture(customers);
  }
}
