package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import rx.Observable;
import rx.Subscriber;
import rx.functions.Action1;
import rx.functions.Func1;
import rx.functions.Func2;
import rx.internal.operators.OnSubscribeRefCount;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class TestUtil {

  public static <T> T await(CompletableFuture<T> o) {
    try {
      return o.get(1, TimeUnit.SECONDS);
    } catch (InterruptedException | TimeoutException | ExecutionException e) {
      throw new RuntimeException(e);
    }
  }


  static class Tuple2<A, B> {
    private A first;
    private B second;

    Tuple2(A first, B second) {
      this.first = first;
      this.second = second;
    }
  }

  interface Outcome<T> {

  }

  static  class Success<T> implements Outcome<T> {

    T value;

    public Success(T value) {
      this.value = value;
    }
  }

  static class Failure<T> implements Outcome<T> {
    Throwable t;

    public Failure(Throwable t) {
      this.t = t;
    }
  }

  public static <T> void eventually(Producer<T> producer, Verifier<T> predicate) {
    Throwable laste = null;
    for (int i = 0; i < 50 ; i++) {
      try {
        T x = producer.produce().get(30, TimeUnit.SECONDS);
        predicate.verify(x);
        return;
      } catch (Throwable t) {
        laste = t;
      }
      try {
        TimeUnit.SECONDS.sleep(1);
      } catch (InterruptedException e) {
        throw new RuntimeException(e);
      }
    }
    if (laste != null)
      throw new RuntimeException("Last exception was", laste);
    else
      throw new RuntimeException("predicate never satisfied");
  }

  private static <T> Observable<T> fromCompletableFuture(CompletableFuture<T> future) {
    return Observable.create(new Observable.OnSubscribe<T>() {
      @Override
      public void call(Subscriber<? super T> subscriber) {
        future.handle((result, throwable) -> {
          if (throwable != null)
            subscriber.onError(throwable);
          else {
            subscriber.onNext(result);
            subscriber.onCompleted();
          }
          return null;
        });
      }
    });
  }

}
