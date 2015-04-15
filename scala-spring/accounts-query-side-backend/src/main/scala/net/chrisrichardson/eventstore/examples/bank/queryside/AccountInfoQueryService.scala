package net.chrisrichardson.eventstore.examples.bank.queryside

import net.chrisrichardson.eventstore.EntityId

class AccountInfoQueryService(accountInfoRepository : AccountInfoRepository) {

  def findByAccountId(accountId : EntityId) : AccountInfo = {
    val account = accountInfoRepository.findOne(accountId.id)
    if (account == null)
      throw new AccountNotFoundException(accountId)
    else
      account
  }

}

class AccountNotFoundException(accountId : EntityId) extends RuntimeException("Account not found " + accountId)