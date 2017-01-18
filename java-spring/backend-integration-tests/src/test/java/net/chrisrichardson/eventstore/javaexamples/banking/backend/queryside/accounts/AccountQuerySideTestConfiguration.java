package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import io.eventuate.javaclient.spring.jdbc.EmbeddedTestAggregateStoreConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.backend.AccountsBackendConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend.AccountViewBackendConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend.MoneyTransferBackendConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({AccountsBackendConfiguration.class, MoneyTransferBackendConfiguration.class, EmbeddedTestAggregateStoreConfiguration.class,
        AccountViewBackendConfiguration.class})
@EnableAutoConfiguration
public class AccountQuerySideTestConfiguration {
}
