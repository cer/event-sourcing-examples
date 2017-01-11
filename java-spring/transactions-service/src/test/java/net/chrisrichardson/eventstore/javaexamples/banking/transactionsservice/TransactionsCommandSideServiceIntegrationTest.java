package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = TransactionsCommandSideServiceTestConfiguration.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0", "management.port=0"})
public class TransactionsCommandSideServiceIntegrationTest {

  @Value("${local.server.port}")
  private int port;

  private String baseUrl(String path) {
    return "http://localhost:" + port + "/api" + path;
  }

  @Autowired
  RestTemplate restTemplate;


  @Test
  public void shouldCreateAccountsAndTransferMoney() {
      // TBD
  }

}
