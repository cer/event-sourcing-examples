package net.chrisrichardson.eventstore.javaexamples.banking.web.queryside;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.QuerySideAccountConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({QuerySideAccountConfiguration.class})
@ComponentScan
public class QuerySideWebConfiguration  {


}
