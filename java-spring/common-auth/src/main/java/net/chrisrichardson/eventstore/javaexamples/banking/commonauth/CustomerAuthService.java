package net.chrisrichardson.eventstore.javaexamples.banking.commonauth;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import org.springframework.dao.support.DataAccessUtils;

/**
 * Created by Main on 15.02.2016.
 */
public class CustomerAuthService {
  private CustomerAuthRepository customerAuthRepository;

  public CustomerAuthService(CustomerAuthRepository customerAuthRepository) {
    this.customerAuthRepository = customerAuthRepository;
  }

  public QuerySideCustomer findByEmail(String email) {
    return DataAccessUtils.uniqueResult(customerAuthRepository.findByEmail(email));
  }

  public QuerySideCustomer findByEmailAndPassword(String email, String password) {
    return DataAccessUtils.uniqueResult(customerAuthRepository.findByEmailAndPassword(email, password));
  }
}
