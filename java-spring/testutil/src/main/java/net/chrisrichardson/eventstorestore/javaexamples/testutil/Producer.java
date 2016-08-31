package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import java.util.concurrent.CompletableFuture;

public interface Producer<T> {
  public CompletableFuture<T> produce();
}
