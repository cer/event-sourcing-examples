package net.chrisrichardson.eventstore.javaexamples.banking.common.customers;

/**
 * Created by popikyardo on 24.03.16.
 */
public class AddToAccountResponse {

    private String version;

    public AddToAccountResponse() {
    }

    public AddToAccountResponse(String version) {
        this.version = version;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
