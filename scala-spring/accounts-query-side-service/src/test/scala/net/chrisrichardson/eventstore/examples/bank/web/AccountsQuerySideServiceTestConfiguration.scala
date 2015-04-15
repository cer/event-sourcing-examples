package net.chrisrichardson.eventstore.examples.bank.web


import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.context.annotation.{Bean, Configuration, Import}
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter
import org.springframework.web.client.RestTemplate

import scala.collection.JavaConversions._

@Configuration
@Import(Array(classOf[AccountsQuerySideServiceConfiguration]))
class AccountsQuerySideServiceTestConfiguration {

  @Bean
  def restTemplate(scalaObjectMapper: ObjectMapper) = {
    val restTemplate = new RestTemplate()
    restTemplate.getMessageConverters foreach {
      case mc: MappingJackson2HttpMessageConverter =>
        mc.setObjectMapper(scalaObjectMapper)
      case _ =>
    }
    restTemplate
  }

}
