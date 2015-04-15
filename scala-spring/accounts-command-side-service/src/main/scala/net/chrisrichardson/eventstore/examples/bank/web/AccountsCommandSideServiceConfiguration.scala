package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.client.config.EventStoreHttpClientConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.accounts.CommandSideWebAccountsConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation._

@Configuration
@EnableAutoConfiguration
@Import(Array(classOf[CommandSideWebAccountsConfiguration], classOf[EventStoreHttpClientConfiguration]))
@ComponentScan
class AccountsCommandSideServiceConfiguration {

}
