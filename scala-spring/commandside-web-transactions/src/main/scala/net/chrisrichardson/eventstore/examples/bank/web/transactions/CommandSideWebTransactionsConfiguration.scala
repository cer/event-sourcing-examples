package net.chrisrichardson.eventstore.examples.bank.web.transactions

import net.chrisrichardson.eventstore.examples.bank.transactions.TransactionConfiguration
import org.springframework.context.annotation.{ComponentScan, Configuration, Import}

@Configuration
@Import(Array(classOf[TransactionConfiguration]))
@ComponentScan
class CommandSideWebTransactionsConfiguration {

}
