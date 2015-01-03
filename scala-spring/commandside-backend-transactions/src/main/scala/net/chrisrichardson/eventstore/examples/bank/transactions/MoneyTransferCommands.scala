package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.{Command, EntityId}
import net.chrisrichardson.eventstore.examples.bank.backend.common.transactions.TransferDetails

object MoneyTransferCommands {

  sealed trait MoneyTransferCommand extends Command

  case class CreateMoneyTransferCommand(details : TransferDetails) extends MoneyTransferCommand
  case class RecordDebitCommand(accountId : EntityId) extends MoneyTransferCommand
  case class RecordDebitFailedDueToInsufficientFundsCommand(accountId : EntityId) extends MoneyTransferCommand
  case class RecordCreditCommand(accountId : EntityId) extends MoneyTransferCommand

}
