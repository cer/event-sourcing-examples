package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import io.eventuate.javaclient.spring.EnableEventHandlers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Created by Main on 04.02.2016.
 */
@Configuration
@EnableMongoRepositories
@EnableEventHandlers
public class QuerySideCustomerConfiguration {
    @Bean
    public CustomerQueryWorkflow customerQueryWorkflow(CustomerInfoUpdateService accountInfoUpdateService) {
        return new CustomerQueryWorkflow(accountInfoUpdateService);
    }

    @Bean
    public CustomerInfoUpdateService customerInfoUpdateService(QuerySideCustomerRepository querySideCustomerRepository) {
        return new CustomerInfoUpdateService(querySideCustomerRepository);
    }

    @Bean
    public CustomerQueryService customerQueryService(QuerySideCustomerRepository accountInfoRepository) {
        return new CustomerQueryService(accountInfoRepository);
    }


    @Bean
    public QuerySideDependencyChecker querysideDependencyChecker(MongoTemplate mongoTemplate) {
        return new QuerySideDependencyChecker(mongoTemplate);
    }

}
