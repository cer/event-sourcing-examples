package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import io.eventuate.CompletableFutureUtil;

import java.util.concurrent.CompletableFuture;

public class AccountQueryService {

  private AccountInfoRepository accountInfoRepository;

  public AccountQueryService(AccountInfoRepository accountInfoRepository) {
    this.accountInfoRepository = accountInfoRepository;
  }

  public CompletableFuture<AccountInfo> findByAccountId(String accountId) {
    AccountInfo account = accountInfoRepository.findOne(accountId);
    if (account == null)
      return CompletableFutureUtil.failedFuture(new AccountNotFoundException(accountId));
    else
      return CompletableFuture.completedFuture(account);
  }
}
