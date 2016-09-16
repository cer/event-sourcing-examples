package net.chrisrichardson.eventstore.javaexamples.banking.apigateway.controller;

import net.chrisrichardson.eventstore.javaexamples.banking.apigateway.ApiGatewayProperties;
import net.chrisrichardson.eventstore.javaexamples.banking.apigateway.utils.ContentRequestTransformer;
import net.chrisrichardson.eventstore.javaexamples.banking.apigateway.utils.HeadersRequestTransformer;
import net.chrisrichardson.eventstore.javaexamples.banking.apigateway.utils.URLRequestTransformer;
import org.apache.http.Header;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.multiaction.NoSuchRequestHandlingMethodException;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by popikyardo on 15.01.16.
 */
@RestController
public class GatewayController {

  Logger logger = LoggerFactory.getLogger(this.getClass());

  @Autowired
  private ApiGatewayProperties apiGatewayProperties;

  private HttpClient httpClient;

  @PostConstruct
  public void init() {
    PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();

    httpClient = HttpClients.custom()
            .setConnectionManager(cm)
            .build();
  }

  @RequestMapping(value = "/api/**", method = {GET, POST, DELETE})
  @ResponseBody
  public ResponseEntity<String> proxyRequest(HttpServletRequest request) throws NoSuchRequestHandlingMethodException, IOException, URISyntaxException {
    HttpUriRequest proxiedRequest = createHttpUriRequest(request);
    logger.info("request: {}", proxiedRequest);
    HttpResponse proxiedResponse = httpClient.execute(proxiedRequest);
    logger.info("Response {}", proxiedResponse.getStatusLine().getStatusCode());
    return new ResponseEntity<>(read(proxiedResponse.getEntity().getContent()), processHeaders(proxiedResponse.getAllHeaders()), HttpStatus.valueOf(proxiedResponse.getStatusLine().getStatusCode()));
  }

  private HttpHeaders processHeaders(Header[] headers) {
    HttpHeaders result = new HttpHeaders();
    Stream.of(headers).filter(h -> h.getName().equalsIgnoreCase("Content-Type")).forEach(h -> result.set(h.getName(), h.getValue()));
    return result;
  }

  private HttpUriRequest createHttpUriRequest(HttpServletRequest request) throws URISyntaxException, NoSuchRequestHandlingMethodException, IOException {
    URLRequestTransformer urlRequestTransformer = new URLRequestTransformer(apiGatewayProperties);
    ContentRequestTransformer contentRequestTransformer = new ContentRequestTransformer();
    HeadersRequestTransformer headersRequestTransformer = new HeadersRequestTransformer();
    headersRequestTransformer.setPredecessor(contentRequestTransformer);
    contentRequestTransformer.setPredecessor(urlRequestTransformer);

    return headersRequestTransformer.transform(request).build();
  }

  private String read(InputStream input) throws IOException {
    try (BufferedReader buffer = new BufferedReader(new InputStreamReader(input))) {
      return buffer.lines().collect(Collectors.joining("\n"));
    }
  }
}
