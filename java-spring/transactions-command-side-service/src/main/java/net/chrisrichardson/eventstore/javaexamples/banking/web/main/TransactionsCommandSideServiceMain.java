package net.chrisrichardson.eventstore.javaexamples.banking.web.main;

import net.chrisrichardson.eventstore.javaexamples.banking.web.TransactionsCommandSideServiceConfiguration;
import org.springframework.boot.SpringApplication;

public class TransactionsCommandSideServiceMain {

  public static void main(String[] args) {
    SpringApplication.run(TransactionsCommandSideServiceConfiguration.class, args);
  }
}
