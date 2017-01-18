package net.chrisrichardson.eventstore.javaexamples.banking.web;

import io.eventuate.javaclient.spring.jdbc.EmbeddedTestAggregateStoreConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.web.AccountsWebConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.web.AccountViewWebConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.AuthConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.customersservice.web.CustomersWebConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.web.CustomersViewWebConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.web.MoneyTransferWebConfiguration;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.RestTemplateErrorHandler;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.Arrays;
import java.util.List;

@Configuration
@Import({AccountsWebConfiguration.class,
        MoneyTransferWebConfiguration.class,
        AccountViewWebConfiguration.class,
        CustomersViewWebConfiguration.class,
        CustomersWebConfiguration.class,
        EmbeddedTestAggregateStoreConfiguration.class,
        AuthConfiguration.class})
@EnableAutoConfiguration
public class BankingWebTestConfiguration extends WebMvcConfigurerAdapter {

  @Bean
  public HttpMessageConverters customConverters() {
    HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
    return new HttpMessageConverters(additional);
  }

  @Bean
  public RestTemplate restTemplate(HttpMessageConverters converters) {
    RestTemplate restTemplate = new RestTemplate();
    HttpMessageConverter<?> httpMessageConverter = converters.getConverters().get(0);
    List<? extends HttpMessageConverter<?>> httpMessageConverters = Arrays.asList(new MappingJackson2HttpMessageConverter());
    restTemplate.setMessageConverters((List<HttpMessageConverter<?>>) httpMessageConverters);

    restTemplate.setErrorHandler(new RestTemplateErrorHandler());
    return restTemplate;
  }
}
