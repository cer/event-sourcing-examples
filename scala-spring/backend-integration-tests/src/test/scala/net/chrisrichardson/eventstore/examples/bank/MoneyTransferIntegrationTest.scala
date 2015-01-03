package net.chrisrichardson.eventstore.examples.bank

import net.chrisrichardson.eventstore.EventStore
import net.chrisrichardson.eventstore.examples.bank.accounts.{AccountService, Account}
import net.chrisrichardson.eventstore.examples.bank.backend.common.accounts.AccountDebitedEvent
import net.chrisrichardson.eventstore.examples.bank.config.BankingTestConfiguration
import net.chrisrichardson.eventstore.examples.bank.queryside.AccountInfoQueryService
import net.chrisrichardson.eventstore.examples.bank.backend.common.transactions.TransferDetails
import net.chrisrichardson.eventstore.examples.bank.transactions.{MoneyTransferService, TransferStates, MoneyTransfer}
import net.chrisrichardson.eventstore.jdbc.config.JdbcEventStoreConfiguration
import org.junit.runner.RunWith
import org.scalatest.FlatSpec
import org.scalatest.junit.JUnitRunner
import org.scalatest.time.{Millis, Span}
import org.springframework.context.annotation.Import

import scala.concurrent.{Await, Future}
import scala.concurrent.duration._
import org.scalatest.concurrent.Eventually._
import org.scalatest.Matchers._
import scala.collection.JavaConversions._
import org.springframework.context.annotation.AnnotationConfigApplicationContext
import scala.reflect.ClassTag

trait SpringTest {
  def configClasses : Seq[Class[_]]
  val ctx = new AnnotationConfigApplicationContext(configClasses :_ *)
  def bean[T](implicit m : ClassTag[T]) : T = ctx.getBean(m.runtimeClass).asInstanceOf[T]
  def bean[T](name : String)(implicit m : ClassTag[T]) : T = ctx.getBean(name, m.runtimeClass).asInstanceOf[T]

}


@RunWith(classOf[JUnitRunner])
class MoneyTransferIntegrationTest extends FlatSpec with SpringTest {

  def configClasses = Seq(classOf[BankingTestConfiguration])

  val accountService = bean[AccountService]
  val transactionService = bean[MoneyTransferService]
  val eventStore = bean[EventStore]
  val accountInfoQueryService = bean[AccountInfoQueryService]

  def await[T](body : => Future[T]) = Await.result(body, 500 milliseconds)

  val longWait = PatienceConfig(Span(5000, Millis), Span(50, Millis))


  it should "transfer money" in {
    val account1 = await { accountService.openAccount(BigDecimal(150)) }
    val account2 = await { accountService.openAccount(BigDecimal(300)) }

    val transaction = await { transactionService.transferMoney(TransferDetails(account1.entityId, account2.entityId, BigDecimal(80))) }
    
    eventually {
      val updatedTransaction = await { eventStore.find[MoneyTransfer](transaction.entityId)}
      updatedTransaction.entity.state should be(TransferStates.COMPLETED)
    }(longWait)

    eventually {
        val updatedAccount1 = await { eventStore.find[Account](account1.entityId) }
        updatedAccount1.entity.balance should be(70)
    }(longWait)

    eventually {
        val updatedAccount2 = await { eventStore.find[Account](account2.entityId) }
        updatedAccount2.entity.balance should be(380)
    }(longWait)

    eventually {
      val accountInfo = accountInfoQueryService.findByAccountId(account1.entityId)
      accountInfo.balance should be(70*100)
      accountInfo.changes.map(_.transactionType) should be(Seq(classOf[AccountDebitedEvent].getSimpleName))
    }(longWait)

  }

  it should "fail to transfer money due to insufficient funds" in {
    val account1 = await { accountService.openAccount(BigDecimal(150)) }
    val account2 = await { accountService.openAccount(BigDecimal(300)) }

    val transaction = await { transactionService.transferMoney(TransferDetails(account1.entityId, account2.entityId, BigDecimal(200))) }

    eventually {
      val updatedTransaction = await { eventStore.find[MoneyTransfer](transaction.entityId)}
      updatedTransaction.entity.state should be(TransferStates.FAILED_DUE_TO_INSUFFICIENT_FUNDS)
    }(longWait)

    eventually {
      val updatedAccount1 = await { eventStore.find[Account](account1.entityId) }
      updatedAccount1.entity.balance should be(150)
    }(longWait)

    eventually {
      val updatedAccount2 = await { eventStore.find[Account](account2.entityId) }
      updatedAccount2.entity.balance should be(300)
    }(longWait)

  }

}
