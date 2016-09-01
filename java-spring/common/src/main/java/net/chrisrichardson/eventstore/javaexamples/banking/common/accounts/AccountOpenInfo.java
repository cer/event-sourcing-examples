package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import java.util.Date;

/**
 * Created by popikyardo on 9/1/16.
 */
public class AccountOpenInfo extends AccountHistoryEntry {

  public AccountOpenInfo() {
  }

  public AccountOpenInfo(Date date, EntryType entryType) {
    super(date, entryType);
  }
}
