package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

public class AccountTransactionInfo {

  // case class AccountTransactionInfo(transactionId : String, fromAccountId: String, toAccountId: String, amount : Long)

  private String transactionId;
  private String fromAccountId;
  private String toAccountId;
  private long amount;

  public AccountTransactionInfo(String transactionId, String fromAccountId, String toAccountId, long amount) {
    this.transactionId = transactionId;
    this.fromAccountId = fromAccountId;
    this.toAccountId = toAccountId;
    this.amount = amount;
  }
}
