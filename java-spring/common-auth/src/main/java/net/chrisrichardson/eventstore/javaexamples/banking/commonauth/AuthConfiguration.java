package net.chrisrichardson.eventstore.javaexamples.banking.commonauth;

import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.filter.StatelessAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.token.KeyBasedPersistenceTokenService;
import org.springframework.security.core.token.TokenService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.security.SecureRandom;

@Configuration
@ComponentScan
@EnableWebSecurity
@EnableMongoRepositories
@EnableConfigurationProperties({AuthProperties.class})
public class AuthConfiguration extends WebSecurityConfigurerAdapter {

  @Autowired
  private AuthProperties securityProperties;

  @Autowired
  private TokenAuthenticationService tokenAuthenticationService;

  @Autowired
  CustomerAuthService customerAuthService;

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(userDetailsServiceBean());
  }

  @Override
  public UserDetailsService userDetailsServiceBean() {
    return email -> {
      QuerySideCustomer customer = customerAuthService.findByEmail(email);
      return new User(email, customer.getPassword(), true, true, true, true,
              AuthorityUtils.createAuthorityList("USER"));
    };
  }

  @Bean
  public CustomerAuthService customerAuthService(CustomerAuthRepository customerAuthRepository) {
    return new CustomerAuthService(customerAuthRepository);
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
            .csrf()
              .disable()
            .httpBasic()
              .and()
            .authorizeRequests()
              .antMatchers(HttpMethod.POST, "/api/customers", "/api/login").permitAll()
              .antMatchers("/api/**").permitAll()
              .anyRequest().permitAll()
              .and()
            .addFilterAfter(new StatelessAuthenticationFilter(tokenAuthenticationService), BasicAuthenticationFilter.class);
  }

  @Bean
  public TokenService tokenService() {
    KeyBasedPersistenceTokenService res = new KeyBasedPersistenceTokenService();
    res.setSecureRandom(new SecureRandom());
    res.setServerSecret(securityProperties.getServerSecret());
    res.setServerInteger(securityProperties.getServerInteger());

    return res;
  }
}
