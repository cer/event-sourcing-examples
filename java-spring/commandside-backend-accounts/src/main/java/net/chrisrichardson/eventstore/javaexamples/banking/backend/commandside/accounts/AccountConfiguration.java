package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;

import net.chrisrichardson.eventstore.EventStore;
import net.chrisrichardson.eventstore.repository.AggregateRepository;
import net.chrisrichardson.eventstore.subscriptions.EnableEventHandlers;
import net.chrisrichardson.eventstore.subscriptions.EventHandlerRegistrarFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableEventHandlers
public class AccountConfiguration {


  @Autowired
  private EventHandlerRegistrarFactory eventHandlerRegistrarFactory;

  @Bean
  public AccountWorkflow accountWorkflow() {
    return new AccountWorkflow();
  }


  @Bean
  public AccountService accountService(AggregateRepository<Account, AccountCommand> accountRepository) {
    return new AccountService(accountRepository);
  }

  @Bean
  public AggregateRepository<Account, AccountCommand> accountRepository(EventStore eventStore) {
    return new AggregateRepository<Account, AccountCommand>(Account.class, eventStore);
  }

}


