package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model.AuthRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model.AuthResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.token.Token;
import org.springframework.security.core.token.TokenService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.io.IOException;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by popikyardo on 21.09.15.
 */
@RestController
@Validated
public class AuthController {

    @Autowired
    private TokenService tokenService;

    private static ObjectMapper objectMapper = new ObjectMapper();

    @RequestMapping(value = "/login", method = POST)
    public ResponseEntity<AuthResponse> doAuth(@RequestBody @Valid AuthRequest request) throws IOException {
        User user = new User();
        user.setEmail(request.getEmail());

        Token token = tokenService.allocateToken(objectMapper.writeValueAsString(user));
        return ResponseEntity.status(HttpStatus.OK)
                .body(new AuthResponse(token.getKey()));
    }


}
