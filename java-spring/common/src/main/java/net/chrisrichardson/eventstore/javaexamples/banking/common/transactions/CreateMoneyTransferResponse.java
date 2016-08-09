package net.chrisrichardson.eventstore.javaexamples.banking.common.transactions;


public class CreateMoneyTransferResponse {
  private String moneyTransferId;

  public CreateMoneyTransferResponse() {
  }

  public CreateMoneyTransferResponse(String moneyTransferId) {

    this.moneyTransferId = moneyTransferId;
  }

  public String getMoneyTransferId() {
    return moneyTransferId;
  }
}
