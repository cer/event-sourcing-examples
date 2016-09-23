package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import java.util.List;

public class AccountHistoryResponse {
  private List<AccountHistoryEntry> transactionsHistory;

  public AccountHistoryResponse() {
  }

  public AccountHistoryResponse(List<AccountHistoryEntry> transactionsHistory) {

    this.transactionsHistory = transactionsHistory;
  }

  public List<AccountHistoryEntry> getTransactionsHistory() {
    return transactionsHistory;
  }

  public void setTransactionsHistory(List<AccountHistoryEntry> transactionsHistory) {
    this.transactionsHistory = transactionsHistory;
  }
}
