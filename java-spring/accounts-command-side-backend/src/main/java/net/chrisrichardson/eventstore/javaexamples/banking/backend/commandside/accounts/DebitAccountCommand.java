package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;

import io.eventuate.Aggregate;


import java.math.BigDecimal;

public class DebitAccountCommand implements AccountCommand {
  private final BigDecimal amount;
  private final String transactionId;

  public DebitAccountCommand(BigDecimal amount, String transactionId) {

    this.amount = amount;
    this.transactionId = transactionId;
  }

  public BigDecimal getAmount() {
    return amount;
  }

  public String getTransactionId() {
    return transactionId;
  }
}

