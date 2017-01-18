package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.backend.Account")
public abstract class AccountEvent implements Event{
}
