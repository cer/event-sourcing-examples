package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;

/**
 * Created by Main on 08.02.2016.
 */
public class CustomerAddedToAccount implements Event {

    private ToAccountInfo toAccountInfo;

    public CustomerAddedToAccount() {
    }

    public CustomerAddedToAccount( ToAccountInfo toAccountInfo) {
        this.toAccountInfo = toAccountInfo;
    }

    public ToAccountInfo getToAccountInfo() {
        return toAccountInfo;
    }

    public void setToAccountInfo(ToAccountInfo toAccountInfo) {
        this.toAccountInfo = toAccountInfo;
    }
}
