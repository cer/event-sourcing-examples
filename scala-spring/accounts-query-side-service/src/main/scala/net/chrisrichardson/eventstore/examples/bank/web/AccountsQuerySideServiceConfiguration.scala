package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.client.config.EventStoreHttpClientConfiguration
import net.chrisrichardson.eventstore.examples.bank.web.queryside.QuerySideWebConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation._

@Configuration
@EnableAutoConfiguration
@Import(Array(classOf[QuerySideWebConfiguration], classOf[EventStoreHttpClientConfiguration]))
@ComponentScan
class AccountsQuerySideServiceConfiguration {

}
