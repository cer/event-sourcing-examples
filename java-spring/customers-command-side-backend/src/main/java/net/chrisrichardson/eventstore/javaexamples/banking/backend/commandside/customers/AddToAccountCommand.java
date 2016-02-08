package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers;

/**
 * Created by Main on 08.02.2016.
 */
public class AddToAccountCommand implements CustomerCommand {

    private String accountId;
    private String accountOwner;
    private String title;

    public AddToAccountCommand(String accountId, String accountOwner, String title) {
        this.accountId = accountId;
        this.accountOwner = accountOwner;
        this.title = title;
    }

    public String getAccountId() {
        return accountId;
    }

    public String getAccountOwner() {
        return accountOwner;
    }

    public String getTitle() {
        return title;
    }
}
