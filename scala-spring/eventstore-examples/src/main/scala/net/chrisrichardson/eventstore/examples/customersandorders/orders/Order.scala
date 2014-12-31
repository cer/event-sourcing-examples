package net.chrisrichardson.eventstore.examples.customersandorders.orders

import net.chrisrichardson.eventstore.examples.customersandorders.orders.OrderCommands.OrderCommand
import net.chrisrichardson.eventstore.{PatternMatchingCommandProcessingAggregate, Command, CommandProcessingAggregate, Event}

case class Order(orderId: String, orderTotal: BigDecimal, state : OrderState)
  extends PatternMatchingCommandProcessingAggregate[Order, OrderCommand] {

  import OrderCommands._

  def this() = this(null, null, null)

  override def processCommand = {
    case CreateOrder(orderId, orderTotal) => Seq(OrderCreatedEvent(orderId, orderTotal))
    case PayForOrder(orderId) => Seq(OrderPaidEvent(orderId))
  }

  override def applyEvent = {

    case OrderCreatedEvent(orderId, orderTotal) => copy(orderId=orderId, orderTotal=orderTotal, state=OPEN)
    case OrderPaidEvent(orderId) => copy(orderId=orderId, orderTotal=orderTotal, state=PAID)

  }

}

trait OrderState
object OPEN extends OrderState
object PAID extends OrderState

object OrderCommands {

  trait OrderCommand extends Command

  case class CreateOrder(orderId : String, orderTotal : BigDecimal) extends OrderCommand
  case class PayForOrder(orderId : String) extends OrderCommand

}

case class OrderCreatedEvent(orderId : String, creditLimit : BigDecimal) extends Event
case class OrderPaidEvent(orderId : String) extends Event
