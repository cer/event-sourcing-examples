package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.CustomerAuthConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CommandSideWebAccountsConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers.CustomersCommandSideWebConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CommandSideWebTransactionsConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.CustomersQuerySideWebConfiguration;
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
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Import({CommandSideWebAccountsConfiguration.class, CommandSideWebTransactionsConfiguration.class, JdbcEventStoreConfiguration.class, QuerySideWebConfiguration.class, CustomersQuerySideWebConfiguration.class, CustomersCommandSideWebConfiguration.class, CustomerAuthConfiguration.class})
@EnableAutoConfiguration
@ComponentScan
public class BankingWebConfiguration extends WebMvcConfigurerAdapter {


  @Bean
  public HttpMessageConverters customConverters() {
    HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
    return new HttpMessageConverters(additional);
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("forward:/index.html");
  }
}
