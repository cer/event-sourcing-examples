package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.filter;

import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.TokenAuthenticationService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class StatelessAuthenticationFilter extends GenericFilterBean {

  private final TokenAuthenticationService tokenAuthenticationService;

  public StatelessAuthenticationFilter(TokenAuthenticationService taService) {
    this.tokenAuthenticationService = taService;
  }

  @Override
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
    if (SecurityContextHolder.getContext().getAuthentication() == null) {
      SecurityContextHolder.getContext().setAuthentication(
              tokenAuthenticationService.getAuthentication((HttpServletRequest) req));
    }
    chain.doFilter(req, res);
  }
}