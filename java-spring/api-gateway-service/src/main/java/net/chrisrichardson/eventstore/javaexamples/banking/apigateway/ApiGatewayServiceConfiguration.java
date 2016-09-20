package net.chrisrichardson.eventstore.javaexamples.banking.apigateway;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.AuthConfiguration;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.Collections;

@Configuration
@ComponentScan
@EnableAutoConfiguration
@Import({AuthConfiguration.class})
@EnableConfigurationProperties({ApiGatewayProperties.class})
public class ApiGatewayServiceConfiguration extends WebMvcConfigurerAdapter {

  @Bean
  public RestTemplate restTemplate(HttpMessageConverters converters) {

    // we have to define Apache HTTP client to use the PATCH verb
    MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
    converter.setSupportedMediaTypes(MediaType.parseMediaTypes("application/json"));
    converter.setObjectMapper(new ObjectMapper());

    HttpClient httpClient = HttpClients.createDefault();
    RestTemplate restTemplate = new RestTemplate(Collections.<HttpMessageConverter<?>>singletonList(converter));
    restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(httpClient));

    restTemplate.setErrorHandler(new RestTemplateErrorHandler());

    return restTemplate;
  }
}
