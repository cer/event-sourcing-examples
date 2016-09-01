package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;

public class AuthenticatedRestTemplate {

  private RestTemplate restTemplate;

  public AuthenticatedRestTemplate(RestTemplate restTemplate) {
    this.restTemplate = restTemplate;
  }

  public <T> T getForEntity(String url, Class<T> clazz) {
    return BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            url,
            HttpMethod.GET,
            clazz);
  }

  public <T> T postForEntity(String url, Object requestObject, Class<T> clazz) {
    return BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            url,
            HttpMethod.POST,
            clazz,
            requestObject
    );
  }
}
