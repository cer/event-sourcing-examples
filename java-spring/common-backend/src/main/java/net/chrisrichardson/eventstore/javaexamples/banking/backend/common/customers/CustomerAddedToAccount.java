package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

import net.chrisrichardson.eventstore.Event;

/**
 * Created by Main on 08.02.2016.
 */
public class CustomerAddedToAccount implements Event {

    private String accountId;
    private String accountOwner;
    private String title;

    public CustomerAddedToAccount() {
    }

    public CustomerAddedToAccount(String accountId, String accountOwner, String title) {
        this.accountId = accountId;
        this.accountOwner = accountOwner;
        this.title = title;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getAccountOwner() {
        return accountOwner;
    }

    public void setAccountOwner(String accountOwner) {
        this.accountOwner = accountOwner;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
