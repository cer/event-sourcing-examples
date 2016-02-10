package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerConfiguration;
import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CustomerConfiguration.class, JdbcEventStoreConfiguration.class, QuerySideCustomerConfiguration.class})
public class CustomerQuerySideTestConfiguration {
}
