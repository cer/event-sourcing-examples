package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import rx.Observable;
import rx.Subscriber;

import javax.annotation.PostConstruct;
import java.util.concurrent.TimeUnit;

public class QuerySideDependencyChecker {
  private Logger logger = LoggerFactory.getLogger(getClass());
  private MongoTemplate mongoTemplate;

  public QuerySideDependencyChecker(MongoTemplate mongoTemplate) {
    this.mongoTemplate = mongoTemplate;
  }

  @PostConstruct
  public void checkDependencies() {
    try {
      logger.info("Checking mongodb connectivity {}", System.getenv("SPRING_DATA_MONGODB_URI"));

      Observable.<Object>create(new Observable.OnSubscribe<Object>() {
        @Override
        public void call(Subscriber<? super Object> subscriber) {
          try {
            subscriber.onNext(mongoTemplate.getDb().getCollectionNames());
            subscriber.onCompleted();
          } catch (Throwable t) {
            subscriber.onError(t);
          }
        }
      }).timeout(5, TimeUnit.SECONDS).toBlocking().first();

    } catch (Throwable e) {
      throw new RuntimeException("Error connecting to Mongo - have you set SPRING_DATA_MONGODB_URI or --spring.data.mongodb_uri?", e);
    }
  }
}
