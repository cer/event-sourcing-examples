package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferConfiguration;
import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({AccountConfiguration.class, MoneyTransferConfiguration.class, JdbcEventStoreConfiguration.class, QuerySideAccountConfiguration.class})
public class AccountQuerySideTestConfiguration {
}
