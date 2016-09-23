package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.UserCredentials;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;

public class AuthenticatedRestTemplate {

  private RestTemplate restTemplate;
  private UserCredentials userCredentials;

  public AuthenticatedRestTemplate(RestTemplate restTemplate, UserCredentials userCredentials) {
    this.restTemplate = restTemplate;
    this.userCredentials = userCredentials;
  }

  public <T> T getForEntity(String url, Class<T> clazz) {
    return BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            url,
            HttpMethod.GET,
            clazz,
            userCredentials);
  }

  public <T> T postForEntity(String url, Object requestObject, Class<T> clazz) {
    return BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            url,
            HttpMethod.POST,
            clazz,
            requestObject,
            userCredentials
    );
  }

  public <T> T deleteEntity(String url, Class<T> clazz) {
    return BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            url,
            HttpMethod.DELETE,
            clazz,
            userCredentials
    );
  }
}
