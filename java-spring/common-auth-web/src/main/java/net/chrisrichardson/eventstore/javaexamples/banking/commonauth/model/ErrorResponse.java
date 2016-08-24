package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model;

/**
 * Created by Main on 17.02.2016.
 */
public class ErrorResponse {

  private String message;

  public ErrorResponse() {
  }

  public ErrorResponse(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
