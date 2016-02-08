package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.EntityIdentifier;
import rx.Observable;

import java.util.List;

public class CustomerQueryService {

  private QuerySideCustomerRepository querySideCustomerRepository;

  public CustomerQueryService(QuerySideCustomerRepository querySideCustomerRepository) {
    this.querySideCustomerRepository = querySideCustomerRepository;
  }

  public Observable<QuerySideCustomer> findByCustomerId(EntityIdentifier customerId) {
    QuerySideCustomer customer = querySideCustomerRepository.findOne(customerId.getId());
    if (customer == null)
      return Observable.error(new CustomerNotFoundException(customerId.getId()));
    else
      return Observable.just(customer);
  }

  public Observable<List<QuerySideCustomer>> findByEmail(String email){
    List<QuerySideCustomer> customers = querySideCustomerRepository.findByEmailLike(email);
    if (customers.isEmpty())
      return Observable.error(new CustomersNotFoundException());
    else
      return Observable.just(customers);
  }
}
