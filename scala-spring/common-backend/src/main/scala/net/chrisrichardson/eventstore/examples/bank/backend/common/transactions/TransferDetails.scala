package net.chrisrichardson.eventstore.examples.bank.backend.common.transactions

import net.chrisrichardson.eventstore.EntityId


case class TransferDetails(fromAccountId : EntityId, toAccountId : EntityId, amount : BigDecimal)
