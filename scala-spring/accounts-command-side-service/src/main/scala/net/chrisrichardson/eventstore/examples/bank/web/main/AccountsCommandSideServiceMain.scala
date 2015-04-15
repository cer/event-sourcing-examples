package net.chrisrichardson.eventstore.examples.bank.web.main

import net.chrisrichardson.eventstore.examples.bank.web.AccountsCommandSideServiceConfiguration
import org.springframework.boot.SpringApplication

object AccountsCommandSideServiceMain  {

  def main(args: Array[String]) : Unit = SpringApplication.run(classOf[AccountsCommandSideServiceConfiguration], args :_ *)

}
