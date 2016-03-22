package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import net.chrisrichardson.eventstore.EntityIdentifier;
import rx.Observable;

import java.util.List;

public class AccountQueryService {

  private AccountInfoRepository accountInfoRepository;

  public AccountQueryService(AccountInfoRepository accountInfoRepository) {
    this.accountInfoRepository = accountInfoRepository;
  }

  public Observable<AccountInfo> findByAccountId(EntityIdentifier accountId) {
    AccountInfo account = accountInfoRepository.findOne(accountId.getId());
    if (account == null)
      return Observable.error(new AccountNotFoundException(accountId.getId()));
    else
      return Observable.just(account);
  }

  public Observable<List<AccountInfo>> findByCustomerId(String customerId) {
      return Observable.just(accountInfoRepository.findByCustomerId(customerId));
  }
}
