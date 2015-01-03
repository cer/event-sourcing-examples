package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CommandSideWebAccountsConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CommandSideWebTransactionsConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.QuerySideWebConfiguration;
import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

@Configuration
@Import({CommandSideWebAccountsConfiguration.class, CommandSideWebTransactionsConfiguration.class, JdbcEventStoreConfiguration.class, QuerySideWebConfiguration.class})
@EnableAutoConfiguration
@ComponentScan
public class BankingWebConfiguration {


  @Bean
  public HttpMessageConverters customConverters() {
    HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
    return new HttpMessageConverters(additional);
  }

}
