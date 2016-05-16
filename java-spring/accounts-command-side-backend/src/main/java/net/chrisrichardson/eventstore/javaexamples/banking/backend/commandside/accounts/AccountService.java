package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;



import io.eventuate.AggregateRepository;
import io.eventuate.EntityWithIdAndVersion;

import java.math.BigDecimal;
import java.util.concurrent.CompletableFuture;

public class AccountService  {

  private final AggregateRepository<Account, AccountCommand> accountRepository;

  public AccountService(AggregateRepository<Account, AccountCommand> accountRepository) {
    this.accountRepository = accountRepository;
  }

  public CompletableFuture<EntityWithIdAndVersion<Account>> openAccount(BigDecimal initialBalance) {
    return accountRepository.save(new OpenAccountCommand(initialBalance));
  }

}
