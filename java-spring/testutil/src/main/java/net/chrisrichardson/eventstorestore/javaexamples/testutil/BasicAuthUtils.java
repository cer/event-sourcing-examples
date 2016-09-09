package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.*;
import org.springframework.util.Assert;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;

/**
 * Created by Main on 18.02.2016.
 */
public class BasicAuthUtils {

  public static HttpHeaders basicAuthHeaders(String username, String password) {
    return new HttpHeaders() {
      {
        String auth = username + ":" + password;
        byte[] encodedAuth = Base64.encodeBase64(
                auth.getBytes(Charset.forName("US-ASCII")));
        String authHeader = "Basic " + new String(encodedAuth);
        set("Authorization", authHeader);
      }
    };
  }

  public static <T> T doBasicAuthenticatedRequest(RestTemplate restTemplate, String url, HttpMethod httpMethod, Class<T> responseType, String email, String password) {
    return doBasicAuthenticatedRequest(restTemplate, url, httpMethod, responseType, null, email, password);
  }

  public static <T> T doBasicAuthenticatedRequest(RestTemplate restTemplate, String url, HttpMethod httpMethod, Class<T> responseType, Object requestObject, String email, String password) {
    HttpEntity httpEntity;
    if (requestObject != null) {
      httpEntity = new HttpEntity<>(requestObject, BasicAuthUtils.basicAuthHeaders(email, password));
    } else {
      httpEntity = new HttpEntity(BasicAuthUtils.basicAuthHeaders(email, password));
    }

    ResponseEntity<T> responseEntity = restTemplate.exchange(url,
            httpMethod,
            httpEntity,
            responseType);
    Assert.isTrue(HttpStatus.OK == responseEntity.getStatusCode(), "Bad response: " + responseEntity.getStatusCode());
    return responseEntity.getBody();
  }
}
