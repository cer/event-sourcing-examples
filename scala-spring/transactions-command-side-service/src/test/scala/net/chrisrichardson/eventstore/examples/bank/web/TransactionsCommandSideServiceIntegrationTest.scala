package net.chrisrichardson.eventstore.examples.bank.web

import org.junit.runner.RunWith
import org.scalatest.FlatSpec
import org.scalatest.concurrent.Eventually._
import org.scalatest.junit.JUnitRunner
import org.scalatest.time.{Millis, Span}
import org.springframework.boot.SpringApplication
import org.springframework.web.client.RestTemplate

@RunWith(classOf[JUnitRunner])
class TransactionsCommandSideServiceIntegrationTest extends FlatSpec {

  val sa = new SpringApplication(classOf[TransactionsCommandSideServiceTestConfiguration])
  val ctx = sa.run()

  // var server = ctx.getBean(classOf[EmbeddedServletContainer])

  val port = 8080

  val baseUrl = s"http://localhost:$port/"

  val restTemplate = ctx.getBean(classOf[RestTemplate])

  implicit val reallyLongPatienceConfig = PatienceConfig(timeout = Span(10 * 1000, Millis), interval = Span(1 * 1000, Millis))

  it should "create accounts and transfer money" in {
    // FIXME
  }
}
