package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import net.chrisrichardson.eventstore.Aggregate;
import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.EntityNotFoundException;
import org.springframework.dao.EmptyResultDataAccessException;
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
    List<AccountInfo> result = accountInfoRepository.findByCustomerId(customerId);
    if(result.isEmpty())
      return Observable.error(new EmptyResultDataAccessException(1));
    else
      return Observable.just(result);
  }
}
