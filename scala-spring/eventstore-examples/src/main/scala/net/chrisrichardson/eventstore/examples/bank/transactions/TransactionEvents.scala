package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.Event

case class MoneyTransferCreatedEvent(details : TransferDetails) extends Event
case class DebitRecordedEvent(details : TransferDetails) extends Event
case class CreditRecordedEvent(details : TransferDetails) extends Event
case class TransferFailedDueToInsufficientFundsEvent() extends Event
