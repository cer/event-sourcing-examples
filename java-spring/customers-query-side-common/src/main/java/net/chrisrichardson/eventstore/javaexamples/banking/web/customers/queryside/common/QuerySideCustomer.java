package net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Address;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.Name;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

/**
 * Created by Main on 05.02.2016.
 */
@Document
public class QuerySideCustomer {

  private String id;
  private Name name;
  @Indexed(unique=true)
  private String email;
  private String password;
  private String ssn;
  private String phoneNumber;
  private Address address;
  private Map<String, ToAccountInfo> toAccounts;

  public QuerySideCustomer() {
  }

  public QuerySideCustomer(String id, Name name, String email, String password, String ssn, String phoneNumber, Address address, Map<String, ToAccountInfo> toAccounts) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.ssn = ssn;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.toAccounts = toAccounts;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Name getName() {
    return name;
  }

  public void setName(Name name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getSsn() {
    return ssn;
  }

  public void setSsn(String ssn) {
    this.ssn = ssn;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }

  public Map<String, ToAccountInfo> getToAccounts() {
    return toAccounts;
  }

  public void setToAccounts(Map<String, ToAccountInfo> toAccounts) {
    this.toAccounts = toAccounts;
  }
}
