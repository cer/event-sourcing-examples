package net.chrisrichardson.eventstore.examples.bank.web.accounts

import net.chrisrichardson.eventstore.examples.bank.accounts.AccountConfiguration
import org.springframework.context.annotation.{ComponentScan, Configuration, Import}

@Configuration
@Import(Array(classOf[AccountConfiguration]))
@ComponentScan
class CommandSideWebAccountsConfiguration {

}
