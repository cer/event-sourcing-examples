package net.chrisrichardson.eventstore.examples.bank.web;


import net.chrisrichardson.eventstorestore.javaexamples.testutil.AbstractRestAPITest;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.junit.Test;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class EndToEndTest extends AbstractRestAPITest {

  private String indexUrl = "http://" + getenv("SERVICE_HOST", "localhost") + ":" + 8080 + "/index.html";

  private String getenv(String name, String defaultValue) {
    String x = System.getenv(name);
    return x == null ? defaultValue : x;
  }

  RestTemplate restTemplate = new RestTemplate();

  CustomersTestUtils customersTestUtils = new CustomersTestUtils(restTemplate, baseUrl("/customers/"));

  public String baseUrl(String path) {
    return "http://" + getenv("SERVICE_HOST", "localhost") + ":" + 8080 + "/api" + path;
  }

  @Test
  public void shouldLoadStaticPage() throws IOException {
    Document doc = Jsoup.connect(indexUrl).get();
    assertNotNull(doc.title());
    assertEquals("Money Transfer App", doc.title());
  }

  @Override
  public CustomersTestUtils getCustomersTestUtils() {
    return customersTestUtils;
  }

  @Override
  public RestTemplate getRestTemplate() {
    return restTemplate;
  }

}
