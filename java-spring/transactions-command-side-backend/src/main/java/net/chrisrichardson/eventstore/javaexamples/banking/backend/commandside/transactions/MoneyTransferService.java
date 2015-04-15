package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions;

import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
import net.chrisrichardson.eventstore.repository.AggregateRepository;
import rx.Observable;

public class MoneyTransferService {
  private final AggregateRepository<MoneyTransfer, MoneyTransferCommand> aggregateRepository;

  public MoneyTransferService(AggregateRepository<MoneyTransfer, MoneyTransferCommand> aggregateRepository) {
    this.aggregateRepository = aggregateRepository;
  }

  public Observable<EntityWithIdAndVersion<MoneyTransfer>> transferMoney(TransferDetails transferDetails) {
    return aggregateRepository.save(new CreateMoneyTransferCommand(transferDetails));
  }

}
