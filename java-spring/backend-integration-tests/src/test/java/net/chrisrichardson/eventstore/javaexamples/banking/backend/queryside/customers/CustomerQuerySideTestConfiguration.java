package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import io.eventuate.javaclient.spring.jdbc.EventuateJdbcEventStoreConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerConfiguration;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CustomerConfiguration.class, EventuateJdbcEventStoreConfiguration.class, QuerySideCustomerConfiguration.class})
public class CustomerQuerySideTestConfiguration {
}
