package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.web;

import net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend.MoneyTransferBackendConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

@Configuration
@Import({MoneyTransferBackendConfiguration.class})
@ComponentScan
public class MoneyTransferWebConfiguration {

  @Bean
  public HttpMessageConverters customConverters() {
    HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
    return new HttpMessageConverters(additional);
  }
  
}
