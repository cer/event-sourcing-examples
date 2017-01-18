package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstorestore.javaexamples.testutil.AbstractRestAPITest;

import net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;
import javax.annotation.PostConstruct;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = BankingWebTestConfiguration.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0", "management.port=0"})
public class BankingWebIntegrationTest extends AbstractRestAPITest {

  @Value("${local.server.port}")
  private int port;

  CustomersTestUtils customersTestUtils;

  @PostConstruct
  private void init() {
    customersTestUtils = new CustomersTestUtils(restTemplate, baseUrl("/customers/"));
  }

  @Override
  public String baseUrl(String path) {
    return "http://localhost:" + port + "/api" + path;
  }

  @Override
  public CustomersTestUtils getCustomersTestUtils() {
    return customersTestUtils;
  }

  @Autowired
  RestTemplate restTemplate;

  @Override
  public RestTemplate getRestTemplate() {
    return restTemplate;
  }
}
