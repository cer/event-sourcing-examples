package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Import({CustomerConfiguration.class})
@ComponentScan
public class CustomersCommandSideWebConfiguration extends WebMvcConfigurerAdapter {

}