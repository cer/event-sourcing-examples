package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import rx.Observable;

public interface Producer<T> {
  public Observable<T> produce();
}
