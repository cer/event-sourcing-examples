package net.chrisrichardson.eventstore.examples.bank.web;


import net.chrisrichardson.eventstorestore.javaexamples.testutil.AbstractRestAPITest;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.AuthenticatedRestTemplate;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils;
import org.springframework.web.client.RestTemplate;

public class EndToEndTest extends AbstractRestAPITest {

    private String getenv(String name, String defaultValue) {
        String x = System.getenv(name);
        return x == null ? defaultValue : x;
    }

    RestTemplate restTemplate = new RestTemplate();

    CustomersTestUtils customersTestUtils = new CustomersTestUtils(restTemplate, baseUrl("/customers/"));

    public String baseUrl(String path) {
        return "http://" + getenv("SERVICE_HOST", "localhost") + ":" + 8080 + "/" + path;
    }

    @Override
    public CustomersTestUtils getCustomersTestUtils() {
        return customersTestUtils;
    }

    @Override
    public AuthenticatedRestTemplate getAuthenticatedRestTemplate() {
        return new AuthenticatedRestTemplate(restTemplate);
    }

    @Override
    public RestTemplate getRestTemplate() {
        return restTemplate;
    }

}
