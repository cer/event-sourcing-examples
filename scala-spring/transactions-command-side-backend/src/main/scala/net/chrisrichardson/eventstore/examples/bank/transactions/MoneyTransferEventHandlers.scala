package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.backend.common.accounts._
import net.chrisrichardson.eventstore.examples.bank.transactions.MoneyTransferCommands.{RecordDebitFailedDueToInsufficientFundsCommand, RecordCreditCommand, RecordDebitCommand}
import net.chrisrichardson.eventstore.subscriptions.{CompoundEventHandler, EventSubscriber}
import net.chrisrichardson.eventstore.util.EventHandlingUtil._
import net.chrisrichardson.eventstore.subscriptions.EventHandler

@EventSubscriber (id = "transactionEventHandlers")
class MoneyTransferEventHandlers(implicit eventStore: EventStore)
  extends CompoundEventHandler {

  @EventHandler
  val recordDebit =
    handlerForEvent[AccountDebitedEvent] { de =>
      existingEntity[MoneyTransfer](de.event.transactionId) <==
        RecordDebitCommand(de.entityId)
    }

  @EventHandler
  val recordCredit =
    handlerForEvent[AccountCreditedEvent] { de =>
      existingEntity[MoneyTransfer](de.event.transactionId) <==
        RecordCreditCommand(de.entityId)
    }

  @EventHandler
  val recordDebitFailed =
    handlerForEvent[AccountDebitFailedDueToInsufficientFundsEvent] { de =>
      existingEntity[MoneyTransfer](de.event.transactionId) <==
        RecordDebitFailedDueToInsufficientFundsCommand(de.entityId)
    }
}
