package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Name;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model.AuthRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.utils.BasicAuthUtils;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;
import rx.Observable;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;

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

        assertCustomerResponse(customerId, customerInfo);

        AuthRequest authRequest = new AuthRequest(email);

        final CustomerResponse loginCustomerResponse = restTemplate.postForEntity(baseUrl("/login"), authRequest, CustomerResponse.class).getBody();

        Assert.assertEquals(customerResponse, loginCustomerResponse);
    }

    private void assertCustomerResponse(final String customerId, final CustomerInfo customerInfo) {
        eventually(
                new Producer<CustomerResponse>() {
                    @Override
                    public Observable<CustomerResponse> produce() {
                        return Observable.just(BasicAuthUtils.doRestTemplateRequest(restTemplate,
                                baseUrl("/customers/" + customerId),
                                HttpMethod.GET,
                                CustomerResponse.class));
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

    private CustomerInfo generateCustomerInfo(String email) {
        return new CustomerInfo(
                new Name("John", "Doe"),
                email,
                "000-00-0000",
                "1-111-111-1111",
                new Address("street 1",
                        "street 2",
                        "City",
                        "State",
                        "1111111")
        );
    }

    private String uniqueEmail() {
        return System.currentTimeMillis() + "@email.com";
    }
}
