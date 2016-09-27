package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.UserCredentials;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.*;
import org.springframework.util.Assert;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;

import static org.junit.Assert.assertEquals;

/**
 * Created by Main on 18.02.2016.
 */
public class BasicAuthUtils {

  public static HttpHeaders basicAuthHeaders(UserCredentials userCredentials) {
    return new HttpHeaders() {
      {
        String auth = userCredentials.getEmail() + ":" + userCredentials.getPassword();
        byte[] encodedAuth = Base64.encodeBase64(
                auth.getBytes(Charset.forName("US-ASCII")));
        String authHeader = "Basic " + new String(encodedAuth);
        set("Authorization", authHeader);
      }
    };
  }

  public static <T> T doBasicAuthenticatedRequest(RestTemplate restTemplate, String url, HttpMethod httpMethod, Class<T> responseType, UserCredentials userCredentials) {
    return doBasicAuthenticatedRequest(restTemplate, url, httpMethod, responseType, null, userCredentials);
  }

  public static <T> T doBasicAuthenticatedRequest(RestTemplate restTemplate, String url, HttpMethod httpMethod, Class<T> responseType, Object requestObject, UserCredentials userCredentials) {
    HttpEntity httpEntity;
    if (requestObject != null) {
      httpEntity = new HttpEntity<>(requestObject, BasicAuthUtils.basicAuthHeaders(userCredentials));
    } else {
      httpEntity = new HttpEntity(BasicAuthUtils.basicAuthHeaders(userCredentials));
    }

    ResponseEntity<T> responseEntity = restTemplate.exchange(url,
            httpMethod,
            httpEntity,
            responseType);

    assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    return responseEntity.getBody();
  }
}
