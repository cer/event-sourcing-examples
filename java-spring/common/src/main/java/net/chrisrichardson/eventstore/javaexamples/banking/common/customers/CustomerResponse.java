package net.chrisrichardson.eventstore.javaexamples.banking.common.customers;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

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

  @Override
  public boolean equals(Object o) {
    return EqualsBuilder.reflectionEquals(this, o);
  }

  @Override
  public int hashCode() {
    return HashCodeBuilder.reflectionHashCode(this);
  }
}
