package net.chrisrichardson.eventstore.examples.bank.accounts

import net.chrisrichardson.eventstore.{Command, EntityId}

object AccountCommands {

  sealed trait AccountCommand extends Command

  case class OpenAccountCommand(initialBalance : BigDecimal) extends AccountCommand
  case class DebitAccountCommand(amount : BigDecimal, transactionId : EntityId) extends AccountCommand
  case class CreditAccountCommand(amount : BigDecimal, transactionId : EntityId) extends AccountCommand

}
