package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts;

import io.eventuate.javaclient.spring.jdbc.EventuateJdbcEventStoreConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CommandSideWebAccountsConfiguration.class, EventuateJdbcEventStoreConfiguration.class})
public class AccountControllerIntegrationTestConfiguration {

}
