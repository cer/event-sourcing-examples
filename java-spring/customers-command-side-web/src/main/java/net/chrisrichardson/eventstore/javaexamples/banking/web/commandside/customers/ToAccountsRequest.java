package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers;

/**
 * Created by Main on 08.02.2016.
 */
public class ToAccountsRequest {
    private String id;
    private String title;
    private String owner;

    public ToAccountsRequest() {
    }

    public ToAccountsRequest(String id, String title, String owner) {
        this.id = id;
        this.title = title;
        this.owner = owner;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }
}
