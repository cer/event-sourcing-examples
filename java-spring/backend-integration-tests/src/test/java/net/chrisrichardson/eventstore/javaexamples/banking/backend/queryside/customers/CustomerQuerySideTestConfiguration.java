package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import io.eventuate.javaclient.spring.jdbc.EmbeddedTestAggregateStoreConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend.CustomerBackendConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.backend.CustomerViewBackendConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CustomerBackendConfiguration.class, EmbeddedTestAggregateStoreConfiguration.class, CustomerViewBackendConfiguration.class})
@EnableAutoConfiguration
public class CustomerQuerySideTestConfiguration {
}
