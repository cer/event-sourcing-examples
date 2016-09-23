package net.chrisrichardson.eventstore.javaexamples.banking.apigateway.utils;

import org.apache.http.client.methods.RequestBuilder;
import org.springframework.web.servlet.mvc.multiaction.NoSuchRequestHandlingMethodException;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.URISyntaxException;

public abstract class ProxyRequestTransformer {

  protected ProxyRequestTransformer predecessor;

  public abstract RequestBuilder transform(HttpServletRequest request) throws NoSuchRequestHandlingMethodException, URISyntaxException, IOException;

  public void setPredecessor(ProxyRequestTransformer transformer) {
    this.predecessor = transformer;
  }
}
