package net.chrisrichardson.eventstore.javaexamples.banking.common.accounts;

import java.util.List;

/**
 * Created by popikyardo on 9/1/16.
 */
public class GetAccountsResponse {
  private List<GetAccountResponse> accounts;

  public GetAccountsResponse() {
  }

  public GetAccountsResponse(List<GetAccountResponse> accounts) {
    this.accounts = accounts;
  }

  public List<GetAccountResponse> getAccounts() {
    return accounts;
  }

  public void setAccounts(List<GetAccountResponse> accounts) {
    this.accounts = accounts;
  }
}
