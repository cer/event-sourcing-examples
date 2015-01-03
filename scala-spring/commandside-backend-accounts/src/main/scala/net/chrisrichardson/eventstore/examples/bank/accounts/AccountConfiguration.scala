package net.chrisrichardson.eventstore.examples.bank.accounts

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.subscriptions.EnableEventHandlers
import net.chrisrichardson.utils.config.MetricRegistryConfiguration
import org.springframework.context.annotation.{Bean, Configuration, Import}

@Configuration
@Import(Array(classOf[MetricRegistryConfiguration]))
@EnableEventHandlers
class AccountConfiguration {

  @Bean
  def accountService(eventStore : EventStore) = new AccountService()(eventStore)


  @Bean
  def transferWorkflow(eventStore: EventStore): TransferWorkflowAccountHandlers = {
    new TransferWorkflowAccountHandlers(eventStore)
  }
}
