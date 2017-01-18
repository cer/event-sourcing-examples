package net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.web;

import net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.backend.AccountsBackendConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({AccountsBackendConfiguration.class})
@ComponentScan
public class AccountsWebConfiguration {


}
