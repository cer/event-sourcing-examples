package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend;

import io.eventuate.AggregateRepository;
import io.eventuate.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;

import java.util.concurrent.CompletableFuture;

public class MoneyTransferService {
  private final AggregateRepository<MoneyTransfer, MoneyTransferCommand> aggregateRepository;

  public MoneyTransferService(AggregateRepository<MoneyTransfer, MoneyTransferCommand> aggregateRepository) {
    this.aggregateRepository = aggregateRepository;
  }

  public CompletableFuture<EntityWithIdAndVersion<MoneyTransfer>> transferMoney(TransferDetails transferDetails) {
    return aggregateRepository.save(new CreateMoneyTransferCommand(transferDetails));
  }

}
