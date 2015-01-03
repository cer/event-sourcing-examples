package net.chrisrichardson.eventstore.examples.bank.web.transactions.controllers

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.backend.common.transactions.TransferDetails
import net.chrisrichardson.eventstore.examples.bank.transactions.{MoneyTransferService, MoneyTransfer}
import net.chrisrichardson.eventstore.examples.bank.web.util.WebUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation._

import scala.concurrent.ExecutionContext.Implicits.global

@RestController
class MoneyTransferController @Autowired()(moneyTransferService : MoneyTransferService,
                                        eventStore : EventStore) {

  @RequestMapping(value=Array("/transfers"), method = Array(RequestMethod.POST))
  def create(@RequestBody transferDetails : TransferDetails) = WebUtil.toDeferredResult {
    for (transaction <- moneyTransferService.transferMoney(transferDetails))
      yield CreateMoneyTransferResponse(transaction.entityId.id)
  }

  @RequestMapping(value=Array("/transfers/{transferId}"), method = Array(RequestMethod.GET))
  def get(@PathVariable transferId : String) = {
    val f = eventStore.find[MoneyTransfer](EntityId(transferId))
    WebUtil.toDeferredResult(f map(transactionAggregate => GetMoneyTransferResponse(transferId, transactionAggregate.entity.state.getClass.getSimpleName)))
  }

}

