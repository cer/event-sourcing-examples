package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.controller;

import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.AuthConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(AuthConfiguration.class)
@EnableAutoConfiguration
public class AuthControllerIntegrationTestConfiguration {
}
