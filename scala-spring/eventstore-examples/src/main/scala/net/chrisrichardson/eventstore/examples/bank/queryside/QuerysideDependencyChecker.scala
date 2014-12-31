package net.chrisrichardson.eventstore.examples.bank.queryside

import javax.annotation.PostConstruct

import net.chrisrichardson.utils.logging.Logging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate

import scala.concurrent.{TimeoutException, Await, Future}
import scala.concurrent.duration._
import scala.concurrent.ExecutionContext.Implicits.global

class QuerysideDependencyChecker (mongoTemplate : MongoTemplate) extends Logging {

  @PostConstruct
  def checkDependencies(): Unit = {
    try {
      Await.result(Future { mongoTemplate.getDb.getCollectionNames}, 5 seconds)
    } catch {
      case e : Throwable =>
        logger.error("Error connecting to Mongo - have you set SPRING_DATA_MONGODB_URI or --spring.data.mongodb_uri?", e)
        throw e
    }
  }

}
