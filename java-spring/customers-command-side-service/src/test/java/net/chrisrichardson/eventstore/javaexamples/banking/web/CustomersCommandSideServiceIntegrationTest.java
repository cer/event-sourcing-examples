package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Name;
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

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CustomersCommandSideServiceTestConfiguration.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0", "management.port=0"})
public class CustomersCommandSideServiceIntegrationTest {

    @Value("${local.server.port}")
    private int port;

    private String baseUrl(String path) {
        return "http://localhost:" + port + "/" + path;
    }

    @Autowired
    RestTemplate restTemplate;


    @Test
    public void shouldCreateCustomer() {
        CustomerInfo customerInfo = generateCustomerInfo();

        final CustomerResponse customerResponse = restTemplate.postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
        final String customerId = customerResponse.getId();

        Assert.assertNotNull(customerId);
        Assert.assertEquals(customerInfo, customerResponse.getCustomerInfo());
    }

    private CustomerInfo generateCustomerInfo() {
        return new CustomerInfo(
                new Name("John", "Doe"),
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
