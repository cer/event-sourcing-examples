package net.chrisrichardson.eventstore.examples.bank.web.queryside.controllers

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.examples.bank.queryside.{AccountNotFoundException, AccountInfoQueryService}
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation._

@RestController
class AccountQuerySideController @Autowired() (accountInfoQueryService : AccountInfoQueryService) {

  @RequestMapping(value=Array("/accounts/{accountId}"), method = Array(RequestMethod.GET))
  def get(@PathVariable accountId : String) = accountInfoQueryService.findByAccountId(EntityId(accountId))

  @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "account not found")
  @ExceptionHandler(Array(classOf[AccountNotFoundException]))
  def accountNotFound() {}
}
