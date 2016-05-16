package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({MoneyTransferConfiguration.class})
@ComponentScan
public class CommandSideWebTransactionsConfiguration  {

}
