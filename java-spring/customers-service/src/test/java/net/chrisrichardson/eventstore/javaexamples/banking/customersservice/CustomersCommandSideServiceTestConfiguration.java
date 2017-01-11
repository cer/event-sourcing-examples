package net.chrisrichardson.eventstore.javaexamples.banking.customersservice;

import io.eventuate.javaclient.spring.jdbc.EmbeddedTestAggregateStoreConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.AuthConfiguration;
import net.chrisrichardson.eventstore.javaexamples.banking.customersservice.web.CustomersWebConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Configuration
@Import({CustomersWebConfiguration.class,
        EmbeddedTestAggregateStoreConfiguration.class,
        AuthConfiguration.class})
@EnableAutoConfiguration
public class CustomersCommandSideServiceTestConfiguration {

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
    return restTemplate;
  }
}
