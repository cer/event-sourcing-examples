package net.chrisrichardson.eventstore.examples.customersandorders.customers

import net.chrisrichardson.eventstore.{PatternMatchingCommandProcessingAggregate, Command, CommandProcessingAggregate, Event}
import CustomerCommands._

case class Customer(customerId: String, creditLimit: BigDecimal)
  extends PatternMatchingCommandProcessingAggregate[Customer, CustomerCommand] {


  def this() = this(null, null)

  override def processCommand = {
    case CreateCustomer(customerId, creditLimit) => Seq(CustomerCreatedEvent(customerId, creditLimit))
    case UpdateCreditLimit(newLimit) if newLimit >= 0 => Seq(CustomerCreditLimitUpdatedEvent(newLimit))
  }

  override def applyEvent = {

    case CustomerCreatedEvent(customerId, creditLimit) => copy(customerId=customerId, creditLimit=creditLimit)
    case CustomerCreditLimitUpdatedEvent(newLimit) => copy(creditLimit=newLimit)

  }
}

object CustomerCommands {

  trait CustomerCommand extends Command

  case class CreateCustomer(customerId : String, creditLimit : BigDecimal) extends CustomerCommand
  case class UpdateCreditLimit(newLimit: BigDecimal) extends CustomerCommand

}

case class CustomerCreatedEvent(customerId : String, creditLimit : BigDecimal) extends Event
case class CustomerCreditLimitUpdatedEvent(newLimit: BigDecimal) extends Event
