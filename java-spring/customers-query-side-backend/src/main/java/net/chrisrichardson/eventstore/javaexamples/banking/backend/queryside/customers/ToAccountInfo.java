package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;


/**
 * Created by Main on 08.02.2016.
 */
public class ToAccountInfo {
    private String id;
    private String title;
    private String owner;

    public ToAccountInfo(String id, String title, String owner) {
        this.id = id;
        this.title = title;
        this.owner = owner;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getOwner() {
        return owner;
    }
}
