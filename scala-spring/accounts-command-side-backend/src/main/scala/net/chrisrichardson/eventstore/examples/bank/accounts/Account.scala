package net.chrisrichardson.eventstore.examples.bank.accounts

import net.chrisrichardson.eventstore.PatternMatchingCommandProcessingAggregate
import net.chrisrichardson.eventstore.examples.bank.accounts.AccountCommands.{DebitAccountCommand, AccountCommand, CreditAccountCommand, OpenAccountCommand}
import net.chrisrichardson.eventstore.examples.bank.backend.common.accounts.{AccountCreditedEvent, AccountDebitFailedDueToInsufficientFundsEvent, AccountDebitedEvent, AccountOpenedEvent}

case class Account(balance : BigDecimal)
  extends PatternMatchingCommandProcessingAggregate[Account, AccountCommand] {

  def this() = this(null)


  def processCommand = {
    case OpenAccountCommand(initialBalance) =>
      Seq(AccountOpenedEvent(initialBalance))

    case CreditAccountCommand(amount, transactionId) =>
      Seq(AccountCreditedEvent(amount, transactionId))

    case DebitAccountCommand(amount, transactionId) if amount <= balance =>
      Seq(AccountDebitedEvent(amount, transactionId))

    case DebitAccountCommand(amount, transactionId) =>
      Seq(AccountDebitFailedDueToInsufficientFundsEvent(amount, transactionId))
  }

  def applyEvent = {

    case AccountOpenedEvent(initialBalance) => copy(balance = initialBalance)

    case AccountDebitedEvent(amount, _) => copy(balance = balance - amount)

    case AccountCreditedEvent(amount, _) =>
      copy(balance = balance + amount)

    case AccountDebitFailedDueToInsufficientFundsEvent(amount, _) =>
      this

  }

}
