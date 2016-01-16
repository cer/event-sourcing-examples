package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;

import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CommandSideWebAccountsConfiguration.class, JdbcEventStoreConfiguration.class})
public class AccountControllerIntegrationTestConfiguration {

}
