package net.chrisrichardson.eventstore.javaexamples.banking.backend;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferConfiguration;
import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration;
import net.chrisrichardson.utils.config.MetricRegistryConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({AccountConfiguration.class, MoneyTransferConfiguration.class, JdbcEventStoreConfiguration.class})
public class BankingTestConfiguration {

}
