package net.chrisrichardson.eventstore.javaexamples.banking.commonauth;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.List;

/**
 * Created by Main on 15.02.2016.
 */
public class CustomerAuthService {
  private CustomerAuthRepository customerAuthRepository;

  public CustomerAuthService(CustomerAuthRepository customerAuthRepository) {
    this.customerAuthRepository = customerAuthRepository;
  }

  public QuerySideCustomer findByEmail(String email) {
    List<QuerySideCustomer> customers = customerAuthRepository.findByEmail(email);
    if (customers.isEmpty())
      throw new EmptyResultDataAccessException(1);
    else
      return customers.get(0);
  }

  public QuerySideCustomer findByEmailAndPassword(String email, String password) {
    List<QuerySideCustomer> customers = customerAuthRepository.findByEmailAndPassword(email, password);
    if (customers.isEmpty())
      throw new EmptyResultDataAccessException(1);
    else
      return customers.get(0);
  }
}
