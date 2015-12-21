package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.EntityId
import net.chrisrichardson.eventstore.examples.bank.queryside.AccountInfo
import net.chrisrichardson.eventstore.examples.bank.web.accounts.controllers.{CreateAccountRequest, CreateAccountResponse}
import net.chrisrichardson.eventstore.examples.bank.web.transactions.controllers.{CreateMoneyTransferResponse, GetMoneyTransferResponse, MoneyTransferRequest}
import net.chrisrichardson.eventstore.json.EventStoreCommonObjectMapping.EventStoreCommonObjectMapper
import org.junit.runner.RunWith
import org.scalatest.FlatSpec
import org.scalatest.Matchers._
import org.scalatest.concurrent.Eventually._
import org.scalatest.junit.JUnitRunner
import org.scalatest.time.{Millis, Span}
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter
import org.springframework.web.client.RestTemplate
import scala.collection.JavaConversions._

@RunWith(classOf[JUnitRunner])
class EndToEndTest extends FlatSpec {

  val serviceHost = Option(System.getenv("SERVICE_HOST")) getOrElse "localhost"
  val accountsCommandSideBaseUrl = s"http://$serviceHost:8080/"
  val accountsQuerySideBaseUrl = s"http://$serviceHost:8081/"
  val transactionsCommandSideBaseUrl = s"http://$serviceHost:8082/"

  val restTemplate = new RestTemplate()
  restTemplate.getMessageConverters foreach {
    case mc: MappingJackson2HttpMessageConverter =>
      mc.setObjectMapper(EventStoreCommonObjectMapper)
    case _ =>
  }

  implicit val reallyLongPatienceConfig = PatienceConfig(timeout = Span(10 * 1000, Millis), interval = Span(1 * 1000, Millis))

  it should "create accounts and transfer money" in {

    val CreateAccountResponse(fromAccountId) = restTemplate.postForEntity(s"$accountsCommandSideBaseUrl/accounts", CreateAccountRequest(BigDecimal(500)), classOf[CreateAccountResponse]).getBody
    val CreateAccountResponse(toAccountId) = restTemplate.postForEntity(s"$accountsCommandSideBaseUrl/accounts", CreateAccountRequest(BigDecimal(100)), classOf[CreateAccountResponse]).getBody

    eventually {
      val accountInfo = restTemplate.getForEntity(s"$accountsQuerySideBaseUrl/accounts/" + fromAccountId, classOf[AccountInfo]).getBody
      accountInfo should not be null
      val AccountInfo(accountId, initialBalance, _, _, _) = accountInfo
      accountId should be(fromAccountId)
      initialBalance should be(500*100)
    }(reallyLongPatienceConfig)


    val CreateMoneyTransferResponse(transactionId) = restTemplate.postForEntity(s"$transactionsCommandSideBaseUrl/transfers",
      MoneyTransferRequest(EntityId(fromAccountId), EntityId(toAccountId), BigDecimal(150)), classOf[CreateMoneyTransferResponse]).getBody

    eventually {
      val AccountInfo(_, newFromAccountBalance, _, _, _) = restTemplate.getForEntity(s"$accountsQuerySideBaseUrl/accounts/" + fromAccountId, classOf[AccountInfo]).getBody
      newFromAccountBalance should be(350*100)
    }(reallyLongPatienceConfig)
    eventually {
      val AccountInfo(_, newToAccountBalance, _, _, _) = restTemplate.getForEntity(s"$accountsQuerySideBaseUrl/accounts/" + toAccountId, classOf[AccountInfo]).getBody
      newToAccountBalance should be(250*100)
    }(reallyLongPatienceConfig)

    eventually {
      val GetMoneyTransferResponse(_, state) = restTemplate.getForEntity(s"$transactionsCommandSideBaseUrl/transfers/" + transactionId, classOf[GetMoneyTransferResponse]).getBody
      state should be("COMPLETED$")
    }(reallyLongPatienceConfig)

  }

}
