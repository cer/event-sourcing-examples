package net.chrisrichardson.eventstore.examples.bank.queryside

import net.chrisrichardson.eventstore.EntityId

class AccountInfoQueryService(accountInfoRepository : AccountInfoRepository) {

  def findByAccountId(accountId : EntityId) : AccountInfo = accountInfoRepository.findOne(accountId.id)

}
