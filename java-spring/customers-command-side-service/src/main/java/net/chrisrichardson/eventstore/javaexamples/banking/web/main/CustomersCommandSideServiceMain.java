package net.chrisrichardson.eventstore.javaexamples.banking.web.main;

import net.chrisrichardson.eventstore.javaexamples.banking.web.CustomersCommandSideServiceConfiguration;
import org.springframework.boot.SpringApplication;

public class CustomersCommandSideServiceMain {

  public static void main(String[] args) {
    SpringApplication.run(CustomersCommandSideServiceConfiguration.class, args);
  }
}
