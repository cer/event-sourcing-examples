package net.chrisrichardson.eventstore.javaexamples.banking.common.customers;


import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

/**
 * Created by Main on 08.02.2016.
 */
public class ToAccountInfo {
  private String id;
  private String title;
  private String owner;
  private String description;

  public ToAccountInfo() {
  }

  public ToAccountInfo(String id, String title, String owner, String description) {
    this.id = id;
    this.title = title;
    this.owner = owner;
    this.description = description;
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

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
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
