package net.chrisrichardson.eventstore.examples.bank.web;


import net.chrisrichardson.eventstorestore.javaexamples.testutil.AbstractRestAPITest;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.AuthenticatedRestTemplate;
import org.springframework.web.client.RestTemplate;

public class EndToEndTest extends AbstractRestAPITest {

    private String getenv(String name, String defaultValue) {
        String x = System.getenv(name);
        return x == null ? defaultValue : x;
    }

    public String baseUrl(String path) {
        return "http://" + getenv("SERVICE_HOST", "localhost") + ":" + 8080 + "/" + path;
    }

    RestTemplate restTemplate = new RestTemplate();

    @Override
    public AuthenticatedRestTemplate getAuthenticatedRestTemplate() {
        return new AuthenticatedRestTemplate(restTemplate);
    }

    @Override
    public RestTemplate getRestTemplate() {
        return restTemplate;
    }

}
