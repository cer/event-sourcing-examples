package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model.AuthRequest;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils;
import org.junit.Assert;
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

/**
 * Created by Main on 15.02.2016.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = BankingWebTestConfiguration.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0", "management.port=0"})
public class BankingAuthTest {

  @Value("${local.server.port}")
  private int port;

  @Autowired
  RestTemplate restTemplate;

  CustomersTestUtils customersTestUtils;

  @PostConstruct
  private void init() {
    customersTestUtils = new CustomersTestUtils(restTemplate, baseUrl("/customers/"));
  }

  private String baseUrl(String path) {
    return "http://localhost:" + port + "/" + path;
  }

  @Test
  public void shouldCreateCustomerAndLogin() {
    String email = uniqueEmail();
    CustomerInfo customerInfo = generateCustomerInfo(email);

    final CustomerResponse customerResponse = restTemplate.postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    Assert.assertNotNull(customerId);
    Assert.assertEquals(customerInfo, customerResponse.getCustomerInfo());

    try {
      Thread.sleep(10000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    customersTestUtils.assertCustomerResponse(customerId, customerInfo);

    AuthRequest authRequest = new AuthRequest(email);

    final QuerySideCustomer loginQuerySideCustomer = restTemplate.postForEntity(baseUrl("/login"), authRequest, QuerySideCustomer.class).getBody();

    customersTestUtils.assertQuerySideCustomerEqualscCustomerInfo(loginQuerySideCustomer, customerResponse.getCustomerInfo());
  }


  private String uniqueEmail() {
    return System.currentTimeMillis() + "@email.com";
  }
}
