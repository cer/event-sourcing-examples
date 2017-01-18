package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend;

import io.eventuate.AggregateRepository;
import io.eventuate.EventuateAggregateStore;
import io.eventuate.javaclient.spring.EnableEventHandlers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableEventHandlers
public class MoneyTransferBackendConfiguration {

  @Bean
  public MoneyTransferService moneyTransferService(AggregateRepository<MoneyTransfer, MoneyTransferCommand> moneyTransferRepository) {
    return new MoneyTransferService(moneyTransferRepository);
  }

  @Bean
  public MoneyTransferWorkflow moneyTransferWorkflow() {
    return new MoneyTransferWorkflow();
  }

  @Bean
  public AggregateRepository<MoneyTransfer, MoneyTransferCommand> moneyTransferRepository(EventuateAggregateStore eventStore) {
    return new AggregateRepository<MoneyTransfer, MoneyTransferCommand>(MoneyTransfer.class, eventStore);
  }


}
