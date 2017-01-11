package net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;

/**
 * Created by Main on 08.02.2016.
 */
public class AddToAccountCommand implements CustomerCommand {

  private ToAccountInfo toAccountInfo;

  public AddToAccountCommand(ToAccountInfo toAccountInfo) {
    this.toAccountInfo = toAccountInfo;
  }

  public ToAccountInfo getToAccountInfo() {
    return toAccountInfo;
  }
}
