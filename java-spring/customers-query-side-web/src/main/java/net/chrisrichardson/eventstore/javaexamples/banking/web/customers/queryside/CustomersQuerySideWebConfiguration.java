package net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers.QuerySideCustomerConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Import({QuerySideCustomerConfiguration.class})
@ComponentScan
public class CustomersQuerySideWebConfiguration extends WebMvcConfigurerAdapter {
}
