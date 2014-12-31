package net.chrisrichardson.eventstore.examples.customersandorders.orders

import net.chrisrichardson.eventstore.examples.customersandorders.orders.OrderCustomerCommands.OrderCustomerCommand
import net.chrisrichardson.eventstore.{PatternMatchingCommandProcessingAggregate, Command, CommandProcessingAggregate, Event}


case class OrderCustomer(customerId: String, creditLimit: BigDecimal,
                         openOrderTotal : BigDecimal,
                         openOrders : Set[String] = Set(),
                         paidOrders : Set[String] = Set())

  extends PatternMatchingCommandProcessingAggregate[OrderCustomer, OrderCustomerCommand] {

  import OrderCustomerCommands._

  def this() = this(null, null, null)


  override def processCommand = {
    case CreateOrderCustomer(customerId, creditLimit) => Seq(OrderCustomerCreatedEvent(customerId, creditLimit))
    case UpdateCreditLimit(newLimit) => Seq(OrderCustomerCreditLimitUpdatedEvent(newLimit))

    case RecordNewOrder(orderId, orderTotal) if !openOrders.contains(orderId) && !paidOrders.contains(orderId) =>
      Seq(NewOrderRecorded(orderId), OpenOrderTotalUpdated(openOrderTotal + orderTotal))

    case _ : RecordNewOrder => Seq()

    case RecordPaidOrder(orderId, orderTotal) if openOrders.contains(orderId) && !paidOrders.contains(orderId) =>
      Seq(PaidOrderRecorded(orderId), OpenOrderTotalUpdated(openOrderTotal - orderTotal))

    case _ : PaidOrderRecorded => Seq()
  }

  override def applyEvent = {

    case OrderCustomerCreatedEvent(customerId, creditLimit) => copy(customerId=customerId, creditLimit=creditLimit, openOrderTotal=0)
    case OrderCustomerCreditLimitUpdatedEvent(newLimit) => copy(creditLimit=newLimit)

    case NewOrderRecorded(orderId) => copy(openOrders=openOrders + orderId)
    case PaidOrderRecorded(orderId) => copy(paidOrders=paidOrders + orderId, openOrders=openOrders - orderId)

    case OpenOrderTotalUpdated(orderTotal) => copy(openOrderTotal=orderTotal)

  }
}

object OrderCustomerCommands {

  trait OrderCustomerCommand extends Command

  case class CreateOrderCustomer(customerId : String, creditLimit : BigDecimal) extends OrderCustomerCommand
  case class UpdateCreditLimit(newLimit: BigDecimal) extends OrderCustomerCommand
  case class RecordNewOrder(orderId : String, orderTotal : BigDecimal) extends OrderCustomerCommand
  case class RecordPaidOrder(orderId : String, orderTotal : BigDecimal) extends OrderCustomerCommand

}

case class OrderCustomerCreatedEvent(customerId : String, creditLimit : BigDecimal) extends Event
case class OrderCustomerCreditLimitUpdatedEvent(newLimit: BigDecimal) extends Event
case class NewOrderRecorded(orderId : String) extends Event
case class PaidOrderRecorded(orderId : String) extends Event
case class OpenOrderTotalUpdated(orderTotal: BigDecimal) extends Event
