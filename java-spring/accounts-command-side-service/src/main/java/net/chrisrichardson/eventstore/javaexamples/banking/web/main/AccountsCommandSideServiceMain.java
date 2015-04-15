package net.chrisrichardson.eventstore.javaexamples.banking.web.main;

import net.chrisrichardson.eventstore.javaexamples.banking.web.AccountsCommandSideServiceConfiguration;
import org.springframework.boot.SpringApplication;

public class AccountsCommandSideServiceMain {

  public static void main(String[] args) {
    SpringApplication.run(AccountsCommandSideServiceConfiguration.class, args);
  }
}
