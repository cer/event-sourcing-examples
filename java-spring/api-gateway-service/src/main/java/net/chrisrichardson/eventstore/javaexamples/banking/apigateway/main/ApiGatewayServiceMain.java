package net.chrisrichardson.eventstore.javaexamples.banking.apigateway.main;

import net.chrisrichardson.eventstore.javaexamples.banking.apigateway.ApiGatewayServiceConfiguration;
import org.springframework.boot.SpringApplication;

/**
 * Created by Main on 19.01.2016.
 */
public class ApiGatewayServiceMain {
  public static void main(String[] args) {
    SpringApplication.run(ApiGatewayServiceConfiguration.class, args);
  }
}
