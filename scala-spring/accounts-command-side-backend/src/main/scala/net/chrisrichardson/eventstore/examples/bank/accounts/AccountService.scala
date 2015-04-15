package net.chrisrichardson.eventstore.examples.bank.accounts

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.accounts.AccountCommands.OpenAccountCommand
import net.chrisrichardson.eventstore.util.ServiceUtil._

class AccountService(implicit eventStore : EventStore) {

  def openAccount(initialBalance : BigDecimal) =
    newEntity[Account] <== OpenAccountCommand(initialBalance)

}
