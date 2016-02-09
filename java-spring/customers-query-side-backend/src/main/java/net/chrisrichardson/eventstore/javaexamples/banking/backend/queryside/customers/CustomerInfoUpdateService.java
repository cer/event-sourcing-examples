package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private QuerySideCustomerRepository accountInfoRepository;
    private MongoTemplate mongoTemplate;

    public CustomerInfoUpdateService(QuerySideCustomerRepository accountInfoRepository, MongoTemplate mongoTemplate) {
        this.accountInfoRepository = accountInfoRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public void create(String id, String firstName, String lastName, CustomerInfo customerInfo) {
        try {
            accountInfoRepository.save(new QuerySideCustomer(id,
                            firstName,
                            lastName,
                            customerInfo.getEmail(),
                            customerInfo.getSsn(),
                            customerInfo.getPhoneNumber(),
                            customerInfo.getAddress(),
                            Collections.<ToAccountInfo>emptyList()
                    )
            );
            logger.info("Saved in mongo");
        } catch (Throwable t) {
            logger.error("Error during saving: ", t);
            throw new RuntimeException(t);
        }
    }

    public void addToAccount(String id, ToAccountInfo accountInfo) {
        mongoTemplate.updateMulti(new Query(where("id").is(id)),
                new Update().
                        push("toAccounts", accountInfo),
                QuerySideCustomer.class);
    }

}
