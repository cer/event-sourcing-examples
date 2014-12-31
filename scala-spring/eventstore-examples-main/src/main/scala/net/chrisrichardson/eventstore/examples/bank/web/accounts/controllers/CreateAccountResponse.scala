package net.chrisrichardson.eventstore.examples.bank.web.accounts.controllers

/**
 * Created by cer on 7/16/14.
 */
case class CreateAccountResponse(accountId : String)
case class GetAccountResponse(accountId : String, balance : String)
