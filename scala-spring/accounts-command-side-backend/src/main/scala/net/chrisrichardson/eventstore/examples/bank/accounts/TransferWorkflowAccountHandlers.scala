package net.chrisrichardson.eventstore.examples.bank.accounts

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.accounts.AccountCommands.{CreditAccountCommand, DebitAccountCommand}
import net.chrisrichardson.eventstore.examples.bank.backend.common.transactions.{DebitRecordedEvent, MoneyTransferCreatedEvent}
import net.chrisrichardson.eventstore.subscriptions.{EventHandlerMethod, CompoundEventHandler, EventSubscriber}
import net.chrisrichardson.eventstore.util.EventHandlingUtil._

@EventSubscriber(id = "accountEventHandlers")
class TransferWorkflowAccountHandlers(eventStore: EventStore) extends CompoundEventHandler {

  implicit val es = eventStore

  @EventHandlerMethod
  val performDebit =
    handlerForEvent[MoneyTransferCreatedEvent] { de =>
      existingEntity[Account](de.event.details.fromAccountId) <==
        DebitAccountCommand(de.event.details.amount, de.entityId)
    }

  @EventHandlerMethod
  val performCredit = handlerForEvent[DebitRecordedEvent] { de =>
    existingEntity[Account](de.event.details.toAccountId) <==
      CreditAccountCommand(de.event.details.amount, de.entityId)
  }

}
