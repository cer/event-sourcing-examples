package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;

public class CreateMoneyTransferCommand implements MoneyTransferCommand {
  private TransferDetails details;

  public TransferDetails getDetails() {
    return details;
  }

  public CreateMoneyTransferCommand(TransferDetails details) {

    this.details = details;
  }
}
