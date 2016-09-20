package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import java.util.Date;

public class AccountOpenInfo extends AccountHistoryEntry {

  private long initialBalance;

  public AccountOpenInfo() {
  }

  public AccountOpenInfo(Date date, EntryType entryType, long initialBalance) {
    super(date, entryType);
    this.initialBalance=initialBalance;
  }

  public long getInitialBalance() {
    return initialBalance;
  }

  public void setInitialBalance(long initialBalance) {
    this.initialBalance = initialBalance;
  }
}
