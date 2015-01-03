package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({AccountConfiguration.class})
@ComponentScan
public class CommandSideWebAccountsConfiguration {

}
