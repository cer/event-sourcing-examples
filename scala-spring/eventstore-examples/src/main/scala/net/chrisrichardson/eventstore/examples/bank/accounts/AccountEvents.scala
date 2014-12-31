package net.chrisrichardson.eventstore.examples.bank.accounts

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.Event

trait AccountChangedEvent extends Event {
  val amount : BigDecimal
  val transactionId : EntityId
}

case class AccountOpenedEvent(initialBalance : BigDecimal) extends Event

case class AccountCreditedEvent(amount : BigDecimal, transactionId : EntityId) extends AccountChangedEvent

case class AccountDebitedEvent(amount : BigDecimal, transactionId : EntityId) extends AccountChangedEvent

case class AccountDebitFailedDueToInsufficientFundsEvent(amount : BigDecimal, transactionId : EntityId) extends AccountChangedEvent


