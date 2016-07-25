package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by popikyardo on 03.02.16.
 */
@Configuration
@Import({CustomerConfiguration.class})
@ComponentScan
public class CustomersCommandSideWebConfiguration extends WebMvcConfigurerAdapter {

}