package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.client.config.EventStoreHttpClientConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.transactions.CommandSideWebTransactionsConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation._

@Configuration
@EnableAutoConfiguration
@Import(Array(classOf[CommandSideWebTransactionsConfiguration], classOf[EventStoreHttpClientConfiguration]))
@ComponentScan
class TransactionsCommandSideServiceConfiguration {

}
