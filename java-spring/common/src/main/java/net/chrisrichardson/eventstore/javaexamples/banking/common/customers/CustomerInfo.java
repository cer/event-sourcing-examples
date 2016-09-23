package net.chrisrichardson.eventstore.javaexamples.banking.common.customers;

import com.fasterxml.jackson.annotation.JsonUnwrapped;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import javax.validation.constraints.NotNull;

public class CustomerInfo {
  private Name name;
  @JsonUnwrapped
  protected UserCredentials userCredentials;
  @NotNull
  protected String ssn;
  protected String phoneNumber;
  protected Address address;

  public CustomerInfo() {
  }

  public CustomerInfo(Name name, UserCredentials userCredentials, String ssn, String phoneNumber, Address address) {
    this.name = name;
    this.userCredentials = userCredentials;
    this.ssn = ssn;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  public Name getName() {
    return name;
  }

  public UserCredentials getUserCredentials() {
    return userCredentials;
  }

  public String getSsn() {
    return ssn;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public Address getAddress() {
    return address;
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
