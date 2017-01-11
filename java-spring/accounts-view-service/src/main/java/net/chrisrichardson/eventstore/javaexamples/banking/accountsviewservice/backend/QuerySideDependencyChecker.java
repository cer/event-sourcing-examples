package net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.mongodb.core.MongoTemplate;

import javax.annotation.PostConstruct;

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

      mongoTemplate.getDb().getCollectionNames();

    } catch (Throwable e) {
      throw new RuntimeException("Error connecting to Mongo - have you set SPRING_DATA_MONGODB_URI or --spring.data.mongodb_uri?", e);
    }
  }
}
