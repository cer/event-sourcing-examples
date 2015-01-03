package net.chrisrichardson.eventstore.javaexamples.banking.web.main;

import net.chrisrichardson.eventstore.javaexamples.banking.web.BankingWebConfiguration;
import org.springframework.boot.SpringApplication;

public class BankingMain {

  public static void main(String[] args) {
    SpringApplication.run(BankingWebConfiguration.class, args);
  }
}
