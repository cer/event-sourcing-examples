package net.chrisrichardson.eventstore.javaexamples.banking.commonauth.model;

/**
 * Created by popikyardo on 21.09.15.
 */
public class AuthResponse {
    private String token;

    public AuthResponse() {
    }

    public AuthResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
