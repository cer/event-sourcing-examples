package net.chrisrichardson.eventstore.javaexamples.banking.backend;

import io.eventuate.javaclient.spring.jdbc.EmbeddedTestAggregateStoreConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.backend.AccountsBackendConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend.MoneyTransferBackendConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({AccountsBackendConfiguration.class, MoneyTransferBackendConfiguration.class, EmbeddedTestAggregateStoreConfiguration.class})
@EnableAutoConfiguration
public class BankingTestConfiguration {

}
