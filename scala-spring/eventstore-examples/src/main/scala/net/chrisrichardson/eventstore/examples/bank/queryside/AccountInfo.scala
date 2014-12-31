package net.chrisrichardson.eventstore.examples.bank.queryside

import org.springframework.data.mongodb.repository.MongoRepository

case class AccountInfo(id : String, balance : Long,
                       changes : java.util.List[AccountChangeInfo],
                       transactions : java.util.List[AccountTransactionInfo],
                       version : String)

case class AccountChangeInfo(changeId : String, transactionId : String, transactionType : String, amount : Long, balanceDelta: Long)

case class AccountTransactionInfo(transactionId : String, fromAccountId: String, toAccountId: String, amount : Long)

trait AccountInfoRepository extends MongoRepository[AccountInfo, String]