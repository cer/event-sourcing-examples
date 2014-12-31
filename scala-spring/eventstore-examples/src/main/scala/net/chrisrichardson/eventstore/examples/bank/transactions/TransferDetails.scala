package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.EntityId

case class TransferDetails(fromAccountId : EntityId, toAccountId : EntityId, amount : BigDecimal)
