package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.embedded.config.EmbeddedEventStoreConfiguration
import net.chrisrichardson.eventstore.examples.bank.accounts.AccountConfiguration
import net.chrisrichardson.eventstore.examples.bank.queryside.QuerySideConfiguration
import net.chrisrichardson.eventstore.examples.bank.transactions.TransactionConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.accounts.CommandSideWebAccountsConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.queryside.QuerySideWebConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.transactions.CommandSideWebTransactionsConfiguration
import net.chrisrichardson.eventstore.json.EventStoreCommonObjectMapping
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.autoconfigure.web.HttpMessageConverters
import org.springframework.context.annotation._
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter

@Configuration
@EnableAutoConfiguration
@Import(Array(classOf[CommandSideWebTransactionsConfiguration], classOf[CommandSideWebAccountsConfiguration], classOf[QuerySideWebConfiguration],
  classOf[EmbeddedEventStoreConfiguration]))
@ComponentScan
class BankingWebAppConfiguration {


  @Bean
  def scalaJSonConverter: HttpMessageConverters = {
    val additional  = new MappingJackson2HttpMessageConverter
    additional.setObjectMapper(EventStoreCommonObjectMapping.getObjectMapper)
    new HttpMessageConverters(additional)
  }

}
