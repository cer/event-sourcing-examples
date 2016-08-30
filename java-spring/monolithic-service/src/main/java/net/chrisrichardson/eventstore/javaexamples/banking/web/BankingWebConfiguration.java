package net.chrisrichardson.eventstore.javaexamples.banking.web;

import io.eventuate.javaclient.spring.httpstomp.EventuateHttpStompClientConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.AuthConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.commonswagger.CommonSwaggerConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CommandSideWebAccountsConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers.CustomersCommandSideWebConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CommandSideWebTransactionsConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.CustomersQuerySideWebConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.QuerySideWebConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Import({CommandSideWebAccountsConfiguration.class, CommandSideWebTransactionsConfiguration.class, EventuateHttpStompClientConfiguration.class, QuerySideWebConfiguration.class, CustomersQuerySideWebConfiguration.class, CustomersCommandSideWebConfiguration.class, AuthConfiguration.class, CommonSwaggerConfiguration.class})
@EnableAutoConfiguration
@ComponentScan
public class BankingWebConfiguration extends WebMvcConfigurerAdapter {


  @Bean
  public HttpMessageConverters customConverters() {
    HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
    return new HttpMessageConverters(additional);
  }

  @Bean
  public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
    System.setProperty("vertx.disableFileCPResolving", "true");
    return new PropertySourcesPlaceholderConfigurer();
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("forward:/index.html");
  }
}
