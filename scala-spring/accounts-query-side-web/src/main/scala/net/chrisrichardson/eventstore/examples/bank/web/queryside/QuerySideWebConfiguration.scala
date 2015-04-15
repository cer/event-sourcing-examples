package net.chrisrichardson.eventstore.examples.bank.web.queryside

import net.chrisrichardson.eventstore.examples.bank.queryside.QuerySideConfiguration
import net.chrisrichardson.eventstore.subscriptions.EnableEventHandlers
import org.springframework.context.annotation._

@Configuration
@Import(Array(classOf[QuerySideConfiguration]))
@ComponentScan
@EnableEventHandlers
class QuerySideWebConfiguration {

}
