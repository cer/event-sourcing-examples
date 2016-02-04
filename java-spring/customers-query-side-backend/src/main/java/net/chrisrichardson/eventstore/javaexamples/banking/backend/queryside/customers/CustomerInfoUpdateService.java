package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by Main on 04.02.2016.
 */
public class CustomerInfoUpdateService {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private CustomerInfoRepository accountInfoRepository;

    public CustomerInfoUpdateService(CustomerInfoRepository accountInfoRepository) {
        this.accountInfoRepository = accountInfoRepository;
    }

    public void create(String id, CustomerInfo customerInfo) {
        try {
            accountInfoRepository.save(new CustomerInfoWithId(id,
                    customerInfo.getEmail(),
                    customerInfo.getSsn(),
                    customerInfo.getPhoneNumber(),
                    customerInfo.getAddress())
            );
            logger.info("Saved in mongo");
        } catch (Throwable t) {
            logger.error("Error during saving: ", t);
            throw new RuntimeException(t);
        }
    }

}
