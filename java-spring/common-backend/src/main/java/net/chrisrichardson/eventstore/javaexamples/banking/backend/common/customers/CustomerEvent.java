package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;

import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.EventEntity;

/**
 * Created by Main on 11.02.2016.
 */
@EventEntity(entity="net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.Customer")
public abstract  class CustomerEvent implements Event {
}