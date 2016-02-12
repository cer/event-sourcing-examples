package net.chrisrichardson.eventstore.javaexamples.banking.common.customers;

/**
 * Created by popikyardo on 03.02.16.
 */
public class CustomerResponse {

    private String id;
    private CustomerInfo customerInfo;

    public CustomerResponse() {
    }

    public CustomerResponse(String id, CustomerInfo customerInfo) {
        this.id = id;
        this.customerInfo = customerInfo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public CustomerInfo getCustomerInfo() {
        return customerInfo;
    }

    public void setCustomerInfo(CustomerInfo customerInfo) {
        this.customerInfo = customerInfo;
    }
}
