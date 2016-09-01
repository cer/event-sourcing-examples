package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import java.util.List;

/**
 * Created by popikyardo on 9/1/16.
 */
public class AccountHistoryResponse {
  private AccountHistoryEntry accountOpened;
  private List<AccountTransactionInfo> transactionsHistory;
  private List<AccountChangeInfo> accountChangesHistory;

  public AccountHistoryResponse() {
  }

  public AccountHistoryResponse(AccountHistoryEntry accountOpened, List<AccountTransactionInfo> transactionsHistory, List<AccountChangeInfo> accountChangesHistory) {
    this.accountOpened = accountOpened;
    this.transactionsHistory = transactionsHistory;
    this.accountChangesHistory = accountChangesHistory;
  }

  public AccountHistoryEntry getAccountOpened() {
    return accountOpened;
  }

  public void setAccountOpened(AccountHistoryEntry accountOpened) {
    this.accountOpened = accountOpened;
  }

  public List<AccountTransactionInfo> getTransactionsHistory() {
    return transactionsHistory;
  }

  public void setTransactionsHistory(List<AccountTransactionInfo> transactionsHistory) {
    this.transactionsHistory = transactionsHistory;
  }

  public List<AccountChangeInfo> getAccountChangesHistory() {
    return accountChangesHistory;
  }

  public void setAccountChangesHistory(List<AccountChangeInfo> accountChangesHistory) {
    this.accountChangesHistory = accountChangesHistory;
  }
}
