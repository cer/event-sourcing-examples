package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;

import java.util.Collections;

/**
 * Created by Main on 04.02.2016.
 */
public class CustomerInfoUpdateService {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private QuerySideCustomerRepository querySideCustomerRepository;

    public CustomerInfoUpdateService(QuerySideCustomerRepository querySideCustomerRepository) {
        this.querySideCustomerRepository = querySideCustomerRepository;
    }

    public void create(String id, CustomerInfo customerInfo) {
        try {
            querySideCustomerRepository.save(new QuerySideCustomer(id,
                            customerInfo.getName(),
                            customerInfo.getEmail(),
                            customerInfo.getPassword(),
                            customerInfo.getSsn(),
                            customerInfo.getPhoneNumber(),
                            customerInfo.getAddress(),
                            Collections.<String, ToAccountInfo>emptyMap()
                    )
            );
            logger.info("Saved in mongo");
        } catch (DuplicateKeyException t) {
            logger.warn("When saving ", t);
        } catch (Throwable t) {
            logger.error("Error during saving: ", t);
            throw new RuntimeException(t);
        }
    }

    public void addToAccount(String id, ToAccountInfo accountInfo) {
        QuerySideCustomer customer = querySideCustomerRepository.findOne(id);
        customer.getToAccounts().put(accountInfo.getId(), accountInfo);
        querySideCustomerRepository.save(customer);
    }

}
