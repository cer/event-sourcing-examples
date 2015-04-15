package net.chrisrichardson.eventstore.examples.bank.web.main

import net.chrisrichardson.eventstore.examples.bank.web.TransactionsCommandSideServiceConfiguration
import org.springframework.boot.SpringApplication

object TransactionsCommandSideServiceMain  {

  def main(args: Array[String]) : Unit = SpringApplication.run(classOf[TransactionsCommandSideServiceConfiguration], args :_ *)

}
