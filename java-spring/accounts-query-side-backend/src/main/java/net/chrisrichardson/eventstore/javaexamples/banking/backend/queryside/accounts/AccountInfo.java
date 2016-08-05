package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import java.util.List;

/**
 * Created by cer on 11/21/14.
 */
public class AccountInfo {

  private String id;
  private String customerId;
  private String title;
  private String description;
  private long balance;
  private List<AccountChangeInfo> changes;
  private List<AccountTransactionInfo> transactions;
  private String version;

  private AccountInfo() {
  }

  public AccountInfo(String id, String customerId, String title, String description, long balance, List<AccountChangeInfo> changes, List<AccountTransactionInfo> transactions, String version) {

    this.id = id;
    this.customerId = customerId;
    this.title = title;
    this.description = description;
    this.balance = balance;
    this.changes = changes;
    this.transactions = transactions;
    this.version = version;
  }

  public String getId() {
    return id;
  }

  public String getCustomerId() {
    return customerId;
  }

  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public long getBalance() {
    return balance;
  }

  public List<AccountChangeInfo> getChanges() {
    return changes;
  }

  public List<AccountTransactionInfo> getTransactions() {
    return transactions;
  }

  public String getVersion() {
    return version;
  }
}
