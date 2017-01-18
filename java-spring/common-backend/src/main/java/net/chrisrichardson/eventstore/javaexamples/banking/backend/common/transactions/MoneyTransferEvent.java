package net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend.MoneyTransfer")
public abstract class MoneyTransferEvent implements Event {
}
