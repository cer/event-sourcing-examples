package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions;

import net.chrisrichardson.eventstore.EventStore;
import net.chrisrichardson.eventstore.repository.AggregateRepository;
import net.chrisrichardson.eventstore.subscriptions.*;
import net.chrisrichardson.eventstore.subscriptions.config.EventStoreSubscriptionsConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import net.chrisrichardson.eventstore.javaapi.consumer.EnableJavaEventHandlers;

@Configuration
@Import(EventStoreSubscriptionsConfiguration.class)
@EnableJavaEventHandlers
public class MoneyTransferConfiguration {

  @Bean
  public MoneyTransferService moneyTransferService(AggregateRepository<MoneyTransfer, MoneyTransferCommand> moneyTransferRepository) {
    return new MoneyTransferService(moneyTransferRepository);
  }

  @Bean
  public MoneyTransferWorkflow moneyTransferWorkflow() {
    return new MoneyTransferWorkflow();
  }

  @Bean
  public AggregateRepository<MoneyTransfer, MoneyTransferCommand> moneyTransferRepository(EventStore eventStore) {
    return new AggregateRepository<MoneyTransfer, MoneyTransferCommand>(MoneyTransfer.class, eventStore);
  }


}
