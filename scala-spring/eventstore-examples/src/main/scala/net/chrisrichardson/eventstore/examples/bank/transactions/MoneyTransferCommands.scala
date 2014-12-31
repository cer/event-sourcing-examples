package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.Command

object MoneyTransferCommands {

  sealed trait MoneyTransferCommand extends Command

  case class CreateMoneyTransferCommand(details : TransferDetails) extends MoneyTransferCommand
  case class RecordDebitCommand(accountId : EntityId) extends MoneyTransferCommand
  case class RecordDebitFailedDueToInsufficientFundsCommand(accountId : EntityId) extends MoneyTransferCommand
  case class RecordCreditCommand(accountId : EntityId) extends MoneyTransferCommand

}
