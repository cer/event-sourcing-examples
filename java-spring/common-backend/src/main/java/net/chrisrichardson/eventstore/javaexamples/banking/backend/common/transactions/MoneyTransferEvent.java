package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransfer")
public abstract class MoneyTransferEvent implements Event {
}
