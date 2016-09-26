package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.Account")
public abstract class AccountEvent implements Event{
}
