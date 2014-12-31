package net.chrisrichardson.eventstore.examples.bank.web.accounts.controllers

import org.springframework.web.context.request.async.DeferredResult

import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by cer on 7/16/14.
 */
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
