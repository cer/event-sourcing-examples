package net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend;


import io.eventuate.javaclient.spring.EnableEventHandlers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories
@EnableEventHandlers
public class AccountViewBackendConfiguration {

  @Bean
  public AccountQueryWorkflow accountQueryWorkflow(AccountInfoUpdateService accountInfoUpdateService) {
    return new AccountQueryWorkflow(accountInfoUpdateService);
  }

  @Bean
  public AccountInfoUpdateService accountInfoUpdateService(AccountInfoRepository accountInfoRepository, MongoTemplate mongoTemplate) {
    return new AccountInfoUpdateService(accountInfoRepository, mongoTemplate);
  }

  @Bean
  public AccountQueryService accountInfoQueryService(AccountInfoRepository accountInfoRepository) {
    return new AccountQueryService(accountInfoRepository);
  }

  @Bean
  public QuerySideDependencyChecker querysideDependencyChecker(MongoTemplate mongoTemplate) {
    return new QuerySideDependencyChecker(mongoTemplate);
  }



}
