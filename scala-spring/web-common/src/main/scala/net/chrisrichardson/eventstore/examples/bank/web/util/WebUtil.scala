package net.chrisrichardson.eventstore.examples.bank.web.util

import org.springframework.web.context.request.async.DeferredResult

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object WebUtil {
  def toDeferredResult[T](future: Future[T]): DeferredResult[T] = {
    val result = new DeferredResult[T]
    future onSuccess {
      case r => result.setResult(r)
    }
    future onFailure {
      case t => result.setErrorResult(t)
    }
    result
  }

}
