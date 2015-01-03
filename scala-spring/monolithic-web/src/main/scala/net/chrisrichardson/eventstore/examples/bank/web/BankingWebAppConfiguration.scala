package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.embedded.config.EmbeddedEventStoreConfiguration
import net.chrisrichardson.eventstore.examples.bank.accounts.AccountConfiguration
import net.chrisrichardson.eventstore.examples.bank.queryside.QuerySideConfiguration
import net.chrisrichardson.eventstore.examples.bank.transactions.TransactionConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.accounts.CommandSideWebAccountsConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.queryside.QuerySideWebConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.transactions.CommandSideWebTransactionsConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation._

@Configuration
@EnableAutoConfiguration
@Import(Array(classOf[CommandSideWebTransactionsConfiguration], classOf[CommandSideWebAccountsConfiguration], classOf[QuerySideWebConfiguration],
  classOf[EmbeddedEventStoreConfiguration]))
@ComponentScan
class BankingWebAppConfiguration {

}
