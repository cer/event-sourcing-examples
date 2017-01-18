package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers;


import io.eventuate.Event;
import io.eventuate.EventEntity;

/**
 * Created by Main on 11.02.2016.
 */
@EventEntity(entity = "net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend.Customer")
public abstract class CustomerEvent implements Event {
}