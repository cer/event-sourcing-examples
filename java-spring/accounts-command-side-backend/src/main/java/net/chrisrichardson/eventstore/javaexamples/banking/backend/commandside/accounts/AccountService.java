package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;


import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.repository.AggregateRepository;

import java.math.BigDecimal;

public class AccountService  {

  private final AggregateRepository<Account, AccountCommand> accountRepository;

  public AccountService(AggregateRepository<Account, AccountCommand> accountRepository) {
    this.accountRepository = accountRepository;
  }

  public rx.Observable<EntityWithIdAndVersion<Account>> openAccount(String customerId, BigDecimal initialBalance) {
    return accountRepository.save(new OpenAccountCommand(customerId, initialBalance));
  }

}
