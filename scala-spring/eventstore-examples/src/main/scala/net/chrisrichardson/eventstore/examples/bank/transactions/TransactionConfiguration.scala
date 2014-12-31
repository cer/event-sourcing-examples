package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.subscriptions.EnableEventHandlers
import org.springframework.context.annotation.{Bean, Configuration}

@Configuration
@EnableEventHandlers
class TransactionConfiguration {

  @Bean
  def accountTransactionService(eventStore : EventStore) = new MoneyTransferService()(eventStore)

  @Bean
  def moneyTransferWorkflow(eventStore: EventStore): MoneyTransferEventHandlers = {
    new MoneyTransferEventHandlers()(eventStore)
  }
}
