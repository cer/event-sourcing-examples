package net.chrisrichardson.eventstore.javaexamples.banking.customersservice.web;

import net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend.CustomerBackendConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Import({CustomerBackendConfiguration.class})
@ComponentScan
public class CustomersWebConfiguration extends WebMvcConfigurerAdapter {

  @Bean
  public HttpMessageConverters customConverters() {
    HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
    return new HttpMessageConverters(additional);
  }

}