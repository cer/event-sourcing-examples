package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import net.chrisrichardson.eventstore.javaexamples.banking.BankingTestConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({BankingTestConfiguration.class, QuerySideAccountConfiguration.class})
public class AccountQuerySideTestConfiguration {
}
