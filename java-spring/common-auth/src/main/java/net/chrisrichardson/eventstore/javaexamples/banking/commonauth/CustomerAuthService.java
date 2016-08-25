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
      //TODO: add unique email constraint
/*        else if(customers.size()>1)
            throw new IncorrectResultSizeDataAccessException(1, customers.size());*/
    else
      return customers.get(0);
  }
}
