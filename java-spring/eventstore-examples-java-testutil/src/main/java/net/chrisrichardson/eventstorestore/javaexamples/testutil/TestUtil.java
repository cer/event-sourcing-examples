package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import rx.Observable;
import rx.functions.Action1;
import rx.functions.Func1;
import rx.functions.Func2;

import java.util.concurrent.TimeUnit;

public class TestUtil {

  public static <T> T await(Observable<T> o) {
    return o.single().timeout(1, TimeUnit.SECONDS).toBlocking().getIterator().next();
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

  public static <T> void eventually(final Producer<T> producer, final Verifier<T> verifier) {
    final int n = 50;
    Object possibleException = Observable.timer(0, 100, TimeUnit.MILLISECONDS).flatMap(new Func1<Long, Observable<Outcome<T>>>() {

      @Override
      public Observable<Outcome<T>> call(Long aLong) {
        try {
          return producer.produce().map(new Func1<T, Outcome<T>>() {
            @Override
            public Outcome<T> call(T t) {
              return new Success<T>(t);
            }
          });
        } catch (Exception e) {
          Outcome<T> value = new Failure<T>(e);
          return Observable.just(value);
        }
      }
    }).map(new Func1<Outcome<T>, Throwable>() {
      @Override
      public Throwable call(Outcome<T> t) {
        try {
          if (t instanceof Success) {
            verifier.verify(((Success<T>) t).value);
            return null;
          } else
            return ((Failure<T>) t).t;
        } catch (Throwable e) {
          return e;
        }
      }
    }).take(n).zipWith(Observable.range(0, n), new Func2<Throwable, Integer, Tuple2<Throwable, Integer>>() {
      @Override
      public Tuple2<Throwable, Integer> call(Throwable e, Integer idx) {
        return new Tuple2<Throwable, Integer>(e, idx);
      }
    }).skipWhile(new Func1<Tuple2<Throwable, Integer>, Boolean>() {
      @Override
      public Boolean call(Tuple2<Throwable, Integer> tuple2) {
        return tuple2.first != null && tuple2.second < n - 1;
      }
    }).first().toBlocking().getIterator().next().first;

    if (possibleException != null)
      throw new RuntimeException((Throwable)possibleException);
  }

}
