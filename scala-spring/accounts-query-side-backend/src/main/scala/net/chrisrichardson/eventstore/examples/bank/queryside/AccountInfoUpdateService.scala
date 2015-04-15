package net.chrisrichardson.eventstore.examples.bank.queryside

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.Event
import net.chrisrichardson.eventstore.Event.EventId
import net.chrisrichardson.eventstore.examples.bank.backend.common.transactions.MoneyTransferCreatedEvent
import net.chrisrichardson.eventstore.examples.bank._
import net.chrisrichardson.eventstore.examples.bank.backend.common.accounts._
import net.chrisrichardson.eventstore.subscriptions.{EventSubscriber, DispatchedEvent, EventHandlerMethod, CompoundEventHandler}
import net.chrisrichardson.eventstore.util.ServiceUtil._
import net.chrisrichardson.utils.logging.Logging
import org.springframework.data.mongodb.core.MongoTemplate

import scala.collection.JavaConversions._

import org.springframework.data.mongodb.core.query.Criteria.where
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import scala.concurrent.ExecutionContext.Implicits.global

import scala.concurrent.Future

@EventSubscriber (id = "querySideEventHandlers")
class AccountInfoUpdateService(accountInfoRepository : AccountInfoRepository, mongoTemplate : MongoTemplate) extends CompoundEventHandler with Logging {


  @EventHandlerMethod
  def created(de: DispatchedEvent[AccountOpenedEvent]) = Future {
    logger.info("About to save")
    try {

      if (de.event.initialBalance != null)
        accountInfoRepository.save(AccountInfo(de.entityId.id, toIntegerRepr(de.event.initialBalance), Seq(), Seq(), de.eventId.asString))
      else
        logger.error("Event with initialBalance == null {}", de.entityId)
    }
    catch {
      case t : Throwable =>
        logger.error("Error during saving: ")
        logger.error("Error during saving: ", t)
        throw t
    }
    logger.info("Saved in mongo")
  }

  @EventHandlerMethod
  def recordDebit(de: DispatchedEvent[AccountDebitedEvent]) = saveChange(de, -1)

  @EventHandlerMethod
  def recordCredit(de: DispatchedEvent[AccountCreditedEvent]) = saveChange(de, +1)

  @EventHandlerMethod
  def recordDebitFailed(de: DispatchedEvent[AccountDebitFailedDueToInsufficientFundsEvent]) = saveChange(de, 0)

  def toIntegerRepr(d : BigDecimal) = (d * 100).toLong
  def saveChange[T <: AccountChangedEvent](de : DispatchedEvent[T], delta : Int) = Future {
    val changeId = de.eventId.asString
    val transactionId = de.event.transactionId.id
    val amount = toIntegerRepr(de.event.amount)

    val ci= AccountChangeInfo(changeId, transactionId, de.event.getClass.getSimpleName, amount, amount * delta)

    mongoTemplate.updateMulti(new Query(where("id").is(de.entityId.id).and("version").lt(changeId)),
      new Update().
        inc("balance", amount * delta).
        push("changes", ci).
        set("version", changeId),
      classOf[AccountInfo])
  }

  @EventHandlerMethod
  def recordTransfer(de: DispatchedEvent[MoneyTransferCreatedEvent]) = Future {
    val eventId = de.eventId.asString
    val fromAccountId = de.event.details.fromAccountId.id
    val toAccountId = de.event.details.toAccountId.id

    val ti = AccountTransactionInfo(de.entityId.id, fromAccountId, toAccountId, toIntegerRepr(de.event.details.amount))

    mongoTemplate.updateMulti(new Query(where("id").is(fromAccountId).and("version").lt(eventId)),
      new Update().
        push("transactions", ti).
        set("version", eventId),
      classOf[AccountInfo])

    mongoTemplate.updateMulti(new Query(where("id").is(toAccountId).and("version").lt(eventId)),
      new Update().
        push("transactions", ti).
        set("version", eventId),
      classOf[AccountInfo])

  }



}
