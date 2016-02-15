package net.chrisrichardson.eventstore.javaexamples.banking.commonauth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Created by Main on 04.02.2016.
 */
@Configuration
@EnableMongoRepositories
@ComponentScan
public class CustomerAuthConfiguration {

    @Bean
    public CustomerAuthService customerAuthService(CustomerAuthRepository customerAuthRepository) {
        return new CustomerAuthService(customerAuthRepository);
    }

}
