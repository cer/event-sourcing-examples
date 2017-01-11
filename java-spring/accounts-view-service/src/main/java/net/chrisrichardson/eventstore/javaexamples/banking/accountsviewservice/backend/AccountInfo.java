package net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend;

import com.fasterxml.jackson.annotation.JsonProperty;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountChangeInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountTransactionInfo;

import java.util.*;

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
  private Map<String, AccountTransactionInfo> transactions;
  private String version;
  @JsonProperty("date")
  private Date creationDate;

  private AccountInfo() {
  }

  public AccountInfo(String id, String customerId, String title, String description, long balance, List<AccountChangeInfo> changes, Map<String, AccountTransactionInfo> transactions, String version) {
    this(id, customerId, title, description, balance, changes, transactions, version, new Date());
  }

  public AccountInfo(String id, String customerId, String title, String description, long balance, List<AccountChangeInfo> changes, Map<String, AccountTransactionInfo> transactions, String version, Date creationDate) {

    this.id = id;
    this.customerId = customerId;
    this.title = title;
    this.description = description;
    this.balance = balance;
    this.changes = changes;
    this.transactions = transactions;
    this.version = version;
    this.creationDate = creationDate;
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
    return changes == null ? Collections.EMPTY_LIST : changes;
  }

  public List<AccountTransactionInfo> getTransactions() {
    return transactions == null ? Collections.EMPTY_LIST : new ArrayList<>(transactions.values());
  }

  public String getVersion() {
    return version;
  }

  public Date getCreationDate() {
    return creationDate;
  }
}
