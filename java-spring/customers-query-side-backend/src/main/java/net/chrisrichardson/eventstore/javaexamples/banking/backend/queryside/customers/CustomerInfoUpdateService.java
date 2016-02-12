package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;

/**
 * Created by Main on 04.02.2016.
 */
public class CustomerInfoUpdateService {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private QuerySideCustomerRepository accountInfoRepository;

    public CustomerInfoUpdateService(QuerySideCustomerRepository accountInfoRepository) {
        this.accountInfoRepository = accountInfoRepository;
    }

    public void create(String id, CustomerInfo customerInfo) {
        try {
            accountInfoRepository.save(new QuerySideCustomer(id,
                            customerInfo.getName(),
                            customerInfo.getEmail(),
                            customerInfo.getSsn(),
                            customerInfo.getPhoneNumber(),
                            customerInfo.getAddress(),
                            Collections.<String, ToAccountInfo>emptyMap()
                    )
            );
            logger.info("Saved in mongo");
        } catch (Throwable t) {
            logger.error("Error during saving: ", t);
            throw new RuntimeException(t);
        }
    }

    public void addToAccount(String id, ToAccountInfo accountInfo) {
        QuerySideCustomer customer = accountInfoRepository.findOne(id);
        customer.getToAccounts().put(accountInfo.getId(), accountInfo);
        accountInfoRepository.save(customer);
    }

}
