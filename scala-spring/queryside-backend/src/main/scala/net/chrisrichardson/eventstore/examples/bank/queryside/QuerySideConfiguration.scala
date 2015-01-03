package net.chrisrichardson.eventstore.examples.bank.queryside

import org.springframework.context.annotation.{Bean, Configuration}
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@Configuration
@EnableMongoRepositories
class QuerySideConfiguration {

  @Bean
  def accountUpdateService(accountInfoRepository: AccountInfoRepository, mongoTemplate: MongoTemplate): AccountInfoUpdateService =
    new AccountInfoUpdateService(accountInfoRepository, mongoTemplate)

  @Bean
  def accountInfoQueryService(accountInfoRepository : AccountInfoRepository) = new AccountInfoQueryService(accountInfoRepository)

  @Bean
  def querysideDependencyChecker(mongoTemplate : MongoTemplate) = new QuerysideDependencyChecker(mongoTemplate)
}
