package net.chrisrichardson.eventstore.javaexamples.banking.apigateway;

import org.springframework.http.HttpStatus;

public class RestUtil {

  public static boolean isError(HttpStatus status) {
    HttpStatus.Series series = status.series();
    return (HttpStatus.Series.CLIENT_ERROR.equals(series)
            || HttpStatus.Series.SERVER_ERROR.equals(series));
  }
}