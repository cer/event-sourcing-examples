package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CommandSideWebTransactionsConfiguration.class, JdbcEventStoreConfiguration.class})
@EnableAutoConfiguration
public class MoneyTransferControllerIntegrationTestConfiguration {
}
