package net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateCustomerInfo;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CustomersQuerySideServiceTestConfiguration.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0", "management.port=0"})
public class CustomersQuerySideServiceIntegrationTest {

  @Value("${local.server.port}")
  private int port;

  private String baseUrl(String path) {
    return "http://localhost:" + port + "/api" + path;
  }

  @Autowired
  RestTemplate restTemplate;

  CustomersTestUtils customersTestUtils;

  @PostConstruct
  private void init() {
    customersTestUtils = new CustomersTestUtils(restTemplate, baseUrl("/customers/"));
  }


  @Test
  public void shouldGetCustomerById() {

    CustomerInfo customerInfo = generateCustomerInfo();

    final CustomerResponse customerResponse = restTemplate.postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    customersTestUtils.assertCustomerResponse(customerId, customerInfo);
  }

}
