package net.chrisrichardson.eventstore.examples.bank.web.transactions.controllers

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.examples.bank.transactions.TransferStates

case class CreateMoneyTransferResponse(transactionId : String)

case class MoneyTransferRequest(fromAccountId : EntityId, toAccountId : EntityId, amount: BigDecimal)

case class GetMoneyTransferResponse(transactionId : String, status : String)

