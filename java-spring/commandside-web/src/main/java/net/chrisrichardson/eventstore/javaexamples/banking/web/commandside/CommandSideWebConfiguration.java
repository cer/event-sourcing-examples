package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({AccountConfiguration.class, MoneyTransferConfiguration.class})
@ComponentScan
public class CommandSideWebConfiguration {

}
