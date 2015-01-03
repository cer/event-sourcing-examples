package net.chrisrichardson.eventstore.examples.bank.web.queryside

import net.chrisrichardson.eventstore.examples.bank.queryside.QuerySideConfiguration
import org.springframework.context.annotation._

@Configuration
@Import(Array(classOf[QuerySideConfiguration]))
@ComponentScan
class QuerySideWebConfiguration {

}
