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

  public static HttpHeaders basicAuthHeaders(String username) {
    return new HttpHeaders() {
      {
        String auth = username + ":";
        byte[] encodedAuth = Base64.encodeBase64(
                auth.getBytes(Charset.forName("US-ASCII")));
        String authHeader = "Basic " + new String(encodedAuth);
        set("Authorization", authHeader);
      }
    };
  }

  public static <T> T doBasicAuthenticatedRequest(RestTemplate restTemplate, String url, HttpMethod httpMethod, Class<T> responseType) {
    return doBasicAuthenticatedRequest(restTemplate, url, httpMethod, responseType, null);
  }

  public static <T> T doBasicAuthenticatedRequest(RestTemplate restTemplate, String url, HttpMethod httpMethod, Class<T> responseType, Object requestObject) {
    HttpEntity httpEntity;
    if (requestObject != null) {
      httpEntity = new HttpEntity<>(requestObject, BasicAuthUtils.basicAuthHeaders("test_user@mail.com"));
    } else {
      httpEntity = new HttpEntity(BasicAuthUtils.basicAuthHeaders("test_user@mail.com"));
    }

    ResponseEntity<T> responseEntity = restTemplate.exchange(url,
            httpMethod,
            httpEntity,
            responseType);
    Assert.isTrue(HttpStatus.OK == responseEntity.getStatusCode(), "Bad response: " + responseEntity.getStatusCode());
    return responseEntity.getBody();
  }
}
