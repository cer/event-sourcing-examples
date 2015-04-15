package net.chrisrichardson.eventstore.examples.bank.web.main

import net.chrisrichardson.eventstore.examples.bank.web.BankingWebAppConfiguration
import org.springframework.boot.SpringApplication

object BankingMain  {

  def main(args: Array[String]) : Unit = SpringApplication.run(classOf[BankingWebAppConfiguration], args :_ *)

}
