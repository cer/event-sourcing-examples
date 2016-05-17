package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import io.eventuate.javaclient.spring.jdbc.EventuateJdbcEventStoreConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CommandSideWebTransactionsConfiguration.class, EventuateJdbcEventStoreConfiguration.class})
@EnableAutoConfiguration
public class MoneyTransferControllerIntegrationTestConfiguration {
}
