package net.chrisrichardson.eventstore.examples.bank.web

import net.chrisrichardson.eventstore.examples.bank.web.accounts.controllers.{CreateAccountRequest, CreateAccountResponse}
import org.junit.Assert
import org.junit.runner.RunWith
import org.scalatest.FlatSpec
import org.scalatest.junit.JUnitRunner
import org.springframework.boot.SpringApplication
import org.springframework.web.client.RestTemplate

@RunWith(classOf[JUnitRunner])
class AccountsCommandSideServiceIntegrationTest extends FlatSpec {

  val sa = new SpringApplication(classOf[AccountsCommandSideServiceTestConfiguration])
  val ctx = sa.run()

  // var server = ctx.getBean(classOf[EmbeddedServletContainer])

  val port = 8080

  val baseUrl = s"http://localhost:$port/"

  val restTemplate = ctx.getBean(classOf[RestTemplate])

  it should "create account" in {

    val CreateAccountResponse(accountId) = restTemplate.postForEntity(s"$baseUrl/accounts", CreateAccountRequest(BigDecimal(500)), classOf[CreateAccountResponse]).getBody
    Assert.assertNotNull(accountId)

  }

}
