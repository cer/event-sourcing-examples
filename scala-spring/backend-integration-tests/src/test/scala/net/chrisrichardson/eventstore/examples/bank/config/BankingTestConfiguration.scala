package net.chrisrichardson.eventstore.examples.bank.config

import net.chrisrichardson.eventstore.examples.bank.accounts.AccountConfiguration
import net.chrisrichardson.eventstore.examples.bank.queryside.QuerySideConfiguration
import net.chrisrichardson.eventstore.examples.bank.transactions.TransactionConfiguration
import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.{Import, Configuration}

@Configuration
@EnableAutoConfiguration
@Import(Array(classOf[JdbcEventStoreConfiguration], classOf[AccountConfiguration], classOf[TransactionConfiguration], classOf[QuerySideConfiguration]))
class BankingTestConfiguration {

}
