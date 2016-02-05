package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
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
import rx.Observable;

import java.math.BigDecimal;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CustomersQuerySideServiceTestConfiguration.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0", "management.port=0"})
public class CustomersQuerySideServiceIntegrationTest {

  @Value("${local.server.port}")
  private int port;

  private String baseUrl(String path) {
    return "http://localhost:" + port + "/" + path;
  }

  @Autowired
  RestTemplate restTemplate;


  @Test
  public void shouldGetCustomerById() {

    CustomerInfo customerInfo = generateCustomerInfo();

    final CustomerResponse customerResponse = restTemplate.postForEntity(baseUrl("/customers"),customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    assertCustomerResponse(customerId, customerInfo);
  }

  private void assertCustomerResponse(final String customerId, final CustomerInfo customerInfo) {
    eventually(
            new Producer<CustomerResponse>() {
              @Override
              public Observable<CustomerResponse> produce() {
                return Observable.just(restTemplate.getForEntity(baseUrl("/customers/" + customerId), CustomerResponse.class).getBody());
              }
            },
            new Verifier<CustomerResponse>() {
              @Override
              public void verify(CustomerResponse customerResponse) {
                Assert.assertEquals(customerId, customerResponse.getId());
                Assert.assertEquals(customerInfo, customerResponse.getCustomerInfo());
              }
            });
  }

  private CustomerInfo generateCustomerInfo() {
    return new CustomerInfo(
            "current@email.com",
            "000-00-0000",
            "1-111-111-1111",
            new Address("street 1",
                    "street 2",
                    "City",
                    "State",
                    "1111111")
    );
  }

}
