package net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.backend;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.util.Collections;

import static org.springframework.data.mongodb.core.query.Criteria.where;

/**
 * Created by Main on 04.02.2016.
 */
public class CustomerInfoUpdateService {

  private Logger logger = LoggerFactory.getLogger(getClass());

  private CustomerViewRepository querySideCustomerRepository;
  private MongoTemplate mongoTemplate;

  public CustomerInfoUpdateService(CustomerViewRepository querySideCustomerRepository, MongoTemplate mongoTemplate) {
    this.querySideCustomerRepository = querySideCustomerRepository;
    this.mongoTemplate = mongoTemplate;
  }

  public void create(String id, CustomerInfo customerInfo) {
    try {
      querySideCustomerRepository.save(new QuerySideCustomer(id,
                      customerInfo.getName(),
                      customerInfo.getUserCredentials().getEmail(),
                      customerInfo.getUserCredentials().getPassword(),
                      customerInfo.getSsn(),
                      customerInfo.getPhoneNumber(),
                      customerInfo.getAddress(),
                      Collections.<String, ToAccountInfo>emptyMap()
              )
      );
      logger.info("Saved in mongo");
    } catch (DuplicateKeyException t) {
      logger.warn("When saving ", t);
    }
  }

  public void addToAccount(String id, ToAccountInfo accountInfo) {
    mongoTemplate.upsert(new Query(where("id").is(id)),
            new Update().
                    set("toAccounts." + accountInfo.getId(), accountInfo),
            QuerySideCustomer.class);
  }

  public void deleteToAccountFromAllCustomers(String accountId) {
    mongoTemplate.updateMulti(new Query(where("toAccounts." + accountId).exists(true)),
            new Update().
                    unset("toAccounts." + accountId),
            QuerySideCustomer.class);
  }

  public void deleteToAccount(String customerId, String accountId) {
    mongoTemplate.upsert(new Query(where("id").is(customerId)),
            new Update().
                    unset("toAccounts." + accountId),
            QuerySideCustomer.class);
  }
}
