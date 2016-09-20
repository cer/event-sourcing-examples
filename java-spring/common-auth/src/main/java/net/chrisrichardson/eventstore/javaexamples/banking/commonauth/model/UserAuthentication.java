package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class UserAuthentication implements Authentication {

  private final User user;
  private boolean authenticated = true;

  public UserAuthentication(User user) {
    this.user = user;
  }

  @Override
  public String getName() {
    return user.getUsername();
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return user.getAuthorities();
  }

  @Override
  public Object getCredentials() {
    return user.getPassword();
  }

  @Override
  public User getDetails() {
    return user;
  }

  @Override
  public Object getPrincipal() {
    return user.getUsername();
  }

  @Override
  public boolean isAuthenticated() {
    return authenticated;
  }

  @Override
  public void setAuthenticated(boolean authenticated) {
    this.authenticated = authenticated;
  }
}