package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import java.util.Date;

/**
 * Created by popikyardo on 9/1/16.
 */
public class AccountHistoryEntry {

  protected Date date;

  public AccountHistoryEntry() {
  }

  public AccountHistoryEntry(Date date) {
    this.date = date;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }
}
