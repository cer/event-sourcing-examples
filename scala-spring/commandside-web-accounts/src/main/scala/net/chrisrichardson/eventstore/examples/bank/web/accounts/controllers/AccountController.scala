package net.chrisrichardson.eventstore.examples.bank.web.accounts.controllers

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.accounts.AccountService
import net.chrisrichardson.eventstore.examples.bank.web.util.WebUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation._
import scala.concurrent.ExecutionContext.Implicits.global


@RestController
class AccountController @Autowired() (accountService : AccountService, eventStore : EventStore) {

  @RequestMapping(value=Array("/accounts"), method = Array(RequestMethod.POST))
  def create(@RequestBody request : CreateAccountRequest) = {
    val f = accountService.openAccount(request.initialBalance)
    WebUtil.toDeferredResult(f map(account => CreateAccountResponse(account.entityId.id)))

  }
}
