package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

public class AuthRequest {

  @NotBlank
  @Email
  private String email;

  @NotBlank
  private String password;

  public AuthRequest() {
  }

  public AuthRequest(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
