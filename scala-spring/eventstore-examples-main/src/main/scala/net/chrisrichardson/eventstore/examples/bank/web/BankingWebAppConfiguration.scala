package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.embedded.config.EmbeddedEventStoreConfiguration
import net.chrisrichardson.eventstore.examples.bank.accounts.AccountConfiguration
import net.chrisrichardson.eventstore.examples.bank.queryside.QuerySideConfiguration
import net.chrisrichardson.eventstore.examples.bank.transactions.TransactionConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation._

@Configuration
@EnableAutoConfiguration
@Import(Array(classOf[AccountConfiguration], classOf[TransactionConfiguration], classOf[QuerySideConfiguration], classOf[EmbeddedEventStoreConfiguration]))
@ComponentScan
class BankingWebAppConfiguration {

}
