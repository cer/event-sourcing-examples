package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.utils;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
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
        if(requestObject!=null) {
            httpEntity = new HttpEntity(requestObject, BasicAuthUtils.basicAuthHeaders("test_user@mail.com"));
        } else {
            httpEntity = new HttpEntity(BasicAuthUtils.basicAuthHeaders("test_user@mail.com"));
        }

        return restTemplate.exchange(url,
                httpMethod,
                httpEntity,
                responseType).getBody();
    }
}
