package net.chrisrichardson.eventstore.javaexamples.banking.web.main;

import net.chrisrichardson.eventstore.javaexamples.banking.web.AccountsQuerySideServiceConfiguration;
import org.springframework.boot.SpringApplication;

public class AccountsQuerySideServiceMain {

  public static void main(String[] args) {
    SpringApplication.run(AccountsQuerySideServiceConfiguration.class, args);
  }
}
