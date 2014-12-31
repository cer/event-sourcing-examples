package net.chrisrichardson.eventstore.examples.bank.web.queryside.controllers

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.accounts.{Account, AccountService}
import net.chrisrichardson.eventstore.examples.bank.queryside.AccountInfoQueryService
import net.chrisrichardson.eventstore.examples.bank.web.accounts.controllers.{GetAccountResponse, WebUtil}
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.{PathVariable, RequestMethod, RequestMapping, RestController}

@RestController
class AccountQuerySideController @Autowired() (accountInfoQueryService : AccountInfoQueryService) {

  @RequestMapping(value=Array("/accounts/{accountId}"), method = Array(RequestMethod.GET))
  def get(@PathVariable accountId : String) = accountInfoQueryService.findByAccountId(EntityId(accountId))

}
