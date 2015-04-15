package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.PatternMatchingCommandProcessingAggregate
import net.chrisrichardson.eventstore.examples.bank.backend.common.transactions._
import net.chrisrichardson.eventstore.examples.bank.transactions.MoneyTransferCommands._

object TransferStates {
  sealed trait State
  object NEW extends State
  object INITIAL extends State
  object DEBITED extends State
  object COMPLETED extends State
  object FAILED_DUE_TO_INSUFFICIENT_FUNDS extends State
}



case class MoneyTransfer(state : TransferStates.State, details : TransferDetails)
  extends PatternMatchingCommandProcessingAggregate[MoneyTransfer, MoneyTransferCommand] {

  def this() = this(TransferStates.NEW, null)

  def processCommand = {
    case CreateMoneyTransferCommand(withDetails) if state == TransferStates.NEW =>
      Seq(MoneyTransferCreatedEvent(withDetails))

    case RecordDebitCommand(accountId) if state == TransferStates.INITIAL && accountId == details.fromAccountId =>
      Seq(DebitRecordedEvent(details))

    case RecordDebitFailedDueToInsufficientFundsCommand(accountId) if state == TransferStates.INITIAL && accountId == details.fromAccountId =>
      Seq(TransferFailedDueToInsufficientFundsEvent())

    case RecordCreditCommand(accountId) if state == TransferStates.DEBITED && accountId == details.toAccountId =>
      Seq(CreditRecordedEvent(details))
  }

  def applyEvent = {

    case MoneyTransferCreatedEvent(withDetails) => copy(state=TransferStates.INITIAL, details=withDetails)
    case DebitRecordedEvent(_) => copy(state=TransferStates.DEBITED)
    case TransferFailedDueToInsufficientFundsEvent() => copy(state=TransferStates.FAILED_DUE_TO_INSUFFICIENT_FUNDS)
    case CreditRecordedEvent(_) => copy(state=TransferStates.COMPLETED)

  }

}
