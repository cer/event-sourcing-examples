package net.chrisrichardson.eventstore.javaexamples.banking.web.main;

import net.chrisrichardson.eventstore.javaexamples.banking.web.CustomersQuerySideServiceConfiguration;
import org.springframework.boot.SpringApplication;

public class CustomersQuerySideServiceMain {

  public static void main(String[] args) {
    SpringApplication.run(CustomersQuerySideServiceConfiguration.class, args);
  }
}
