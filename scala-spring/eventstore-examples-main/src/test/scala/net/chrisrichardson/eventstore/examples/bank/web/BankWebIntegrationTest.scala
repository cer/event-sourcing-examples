package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.examples.bank.queryside.AccountInfo
import net.chrisrichardson.eventstore.examples.bank.transactions.TransferStates
import net.chrisrichardson.eventstore.examples.bank.web.accounts.controllers.{GetAccountResponse, CreateAccountRequest, CreateAccountResponse}
import net.chrisrichardson.eventstore.examples.bank.web.transactions.controllers.{GetMoneyTransferResponse, MoneyTransferRequest, CreateMoneyTransferResponse}
import org.junit.runner.RunWith
import org.scalatest.FlatSpec
import org.scalatest.concurrent.Eventually._
import org.scalatest.junit.JUnitRunner
import org.scalatest.time.{Millis, Span}
import org.springframework.boot.SpringApplication
import org.springframework.web.client.RestTemplate
import org.scalatest.Matchers._

@RunWith(classOf[JUnitRunner])
class BankWebIntegrationTest extends FlatSpec {

  val sa = new SpringApplication(classOf[BankingWebAppTestConfiguration])
  val ctx = sa.run()

  // var server = ctx.getBean(classOf[EmbeddedServletContainer])

  val port = 8080

  val baseUrl = s"http://localhost:$port/"

  val restTemplate = ctx.getBean(classOf[RestTemplate])

  implicit val reallyLongPatienceConfig = PatienceConfig(timeout = Span(10 * 1000, Millis), interval = Span(1 * 1000, Millis))

  it should "create accounts and transfer money" in {

    val CreateAccountResponse(fromAccountId) = restTemplate.postForEntity(s"$baseUrl/accounts", CreateAccountRequest(BigDecimal(500)), classOf[CreateAccountResponse]).getBody
    val CreateAccountResponse(toAccountId) = restTemplate.postForEntity(s"$baseUrl/accounts", CreateAccountRequest(BigDecimal(100)), classOf[CreateAccountResponse]).getBody

    val AccountInfo(accountId, initialBalance, _, _, _) = restTemplate.getForEntity(s"$baseUrl/accounts/" + fromAccountId, classOf[AccountInfo]).getBody

    accountId should be(fromAccountId)
    initialBalance should be(500*100)

    val CreateMoneyTransferResponse(transactionId) = restTemplate.postForEntity(s"$baseUrl/transfers",
      MoneyTransferRequest(EntityId(fromAccountId), EntityId(toAccountId), BigDecimal(150)), classOf[CreateMoneyTransferResponse]).getBody

    eventually {
      val AccountInfo(_, newFromAccountBalance, _, _, _) = restTemplate.getForEntity(s"$baseUrl/accounts/" + fromAccountId, classOf[AccountInfo]).getBody
      newFromAccountBalance should be(350*100)
    }(reallyLongPatienceConfig)
    eventually {
      val AccountInfo(_, newToAccountBalance, _, _, _) = restTemplate.getForEntity(s"$baseUrl/accounts/" + toAccountId, classOf[AccountInfo]).getBody
      newToAccountBalance should be(250*100)
    }(reallyLongPatienceConfig)

    eventually {
      val GetMoneyTransferResponse(_, state) = restTemplate.getForEntity(s"$baseUrl/transfers/" + transactionId, classOf[GetMoneyTransferResponse]).getBody
      state should be("COMPLETED$")
    }(reallyLongPatienceConfig)

  }

}
