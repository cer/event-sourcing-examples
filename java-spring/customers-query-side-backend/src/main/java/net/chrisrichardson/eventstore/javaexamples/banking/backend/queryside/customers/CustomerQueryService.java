package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.EntityIdentifier;
import rx.Observable;

import java.util.List;

public class CustomerQueryService {

  private CustomerInfoRepository customerInfoRepository;

  public CustomerQueryService(CustomerInfoRepository customerInfoRepository) {
    this.customerInfoRepository = customerInfoRepository;
  }

  public Observable<CustomerInfoWithId> findByCustomerId(EntityIdentifier customerId) {
    CustomerInfoWithId customer = customerInfoRepository.findOne(customerId.getId());
    if (customer == null)
      return Observable.error(new CustomerNotFoundException(customerId.getId()));
    else
      return Observable.just(customer);
  }

  public Observable<List<CustomerInfoWithId>> findByEmail(String email){
    List<CustomerInfoWithId> customers = customerInfoRepository.findByEmailLike(email);
    if (customers.isEmpty())
      return Observable.error(new CustomersNotFoundException());
    else
      return Observable.just(customers);
  }
}
