package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.client.config.EventStoreHttpClientConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers.QuerySideCustomerConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.commonswagger.CommonSwaggerConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

@Configuration
@Import({QuerySideCustomerConfiguration.class, EventStoreHttpClientConfiguration.class, CommonSwaggerConfiguration.class})
@EnableAutoConfiguration
@ComponentScan
public class CustomersQuerySideServiceConfiguration {


  @Bean
  public HttpMessageConverters customConverters() {
    HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
    return new HttpMessageConverters(additional);
  }

}
