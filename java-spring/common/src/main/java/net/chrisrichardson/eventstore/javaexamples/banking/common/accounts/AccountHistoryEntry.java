package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import java.util.Date;

@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS,
        include = JsonTypeInfo.As.PROPERTY,
        property = "entryType")
@JsonSubTypes({
        @JsonSubTypes.Type(value = AccountTransactionInfo.class, name = "transaction"),
        @JsonSubTypes.Type(value = AccountOpenInfo.class, name = "account")
})
public class AccountHistoryEntry {

  protected Date date;
  protected EntryType entryType;

  public AccountHistoryEntry() {
  }

  public AccountHistoryEntry(Date date, EntryType entryType) {
    this.date = date;
    this.entryType = entryType;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public EntryType getEntryType() {
    return entryType;
  }

  public void setEntryType(EntryType entryType) {
    this.entryType = entryType;
  }

  public enum EntryType {
    transaction, account
  }
}
