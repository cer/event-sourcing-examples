package net.chrisrichardson.eventstore.examples.bank.web.main

import net.chrisrichardson.eventstore.examples.bank.web.AccountsQuerySideServiceConfiguration
import org.springframework.boot.SpringApplication

object AccountsQuerySideServiceMain  {

  def main(args: Array[String]) : Unit = SpringApplication.run(classOf[AccountsQuerySideServiceConfiguration], args :_ *)

}
