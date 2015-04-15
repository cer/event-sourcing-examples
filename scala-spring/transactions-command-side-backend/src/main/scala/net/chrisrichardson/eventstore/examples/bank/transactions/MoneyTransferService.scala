package net.chrisrichardson.eventstore.examples.bank.transactions

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.backend.common.transactions.TransferDetails
import net.chrisrichardson.eventstore.examples.bank.transactions.MoneyTransferCommands.CreateMoneyTransferCommand
import net.chrisrichardson.eventstore.util.ServiceUtil._

class MoneyTransferService(implicit eventStore : EventStore) {

  def transferMoney(transferDetails : TransferDetails) =
    newEntity[MoneyTransfer] <== CreateMoneyTransferCommand(transferDetails)

}
