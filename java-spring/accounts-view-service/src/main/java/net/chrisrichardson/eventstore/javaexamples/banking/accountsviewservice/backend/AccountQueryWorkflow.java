package net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend;

import io.eventuate.DispatchedEvent;
import io.eventuate.EventHandlerMethod;
import io.eventuate.EventSubscriber;
import io.eventuate.Int128;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.*;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.CreditRecordedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.DebitRecordedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.FailedDebitRecordedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.MoneyTransferCreatedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountChangeInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountTransactionInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.TransferState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;

import static net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend.MoneyUtil.toIntegerRepr;

@EventSubscriber(id="querySideEventHandlers")
public class AccountQueryWorkflow {
  private Logger logger = LoggerFactory.getLogger(getClass());

  private AccountInfoUpdateService accountInfoUpdateService;

  public AccountQueryWorkflow(AccountInfoUpdateService accountInfoUpdateService) {
    this.accountInfoUpdateService = accountInfoUpdateService;
  }

  @EventHandlerMethod
  public void create(DispatchedEvent<AccountOpenedEvent> de) {
    AccountOpenedEvent event = de.getEvent();
    String id = de.getEntityId();
    Int128 eventId = de.getEventId();
    logger.info("**************** account version={}, {}", id, eventId);
    BigDecimal initialBalance = event.getInitialBalance();

    String customerId =  event.getCustomerId();
    String title =  event.getTitle();
    String description =  event.getDescription();

    accountInfoUpdateService.create(id, customerId, title, initialBalance, description, eventId);
  }

  @EventHandlerMethod
  public void delete(DispatchedEvent<AccountDeletedEvent> de) {
    String id = de.getEntityId();
    accountInfoUpdateService.delete(id);
  }

  @EventHandlerMethod
  public void recordTransfer(DispatchedEvent<MoneyTransferCreatedEvent> de) {
    String eventId = de.getEventId().asString();
    String moneyTransferId = de.getEntityId();
    String fromAccountId = de.getEvent().getDetails().getFromAccountId();
    String toAccountId = de.getEvent().getDetails().getToAccountId();
    logger.info("**************** account version={}, {}", fromAccountId, eventId);
    logger.info("**************** account version={}, {}", toAccountId, eventId);

    AccountTransactionInfo ti = new AccountTransactionInfo(moneyTransferId,
            fromAccountId,
            toAccountId,
            toIntegerRepr(de.getEvent().getDetails().getAmount()),
            de.getEvent().getDetails().getDate(),
            de.getEvent().getDetails().getDescription());

    accountInfoUpdateService.addTransaction(fromAccountId, ti);
    accountInfoUpdateService.addTransaction(toAccountId, ti);
  }

  @EventHandlerMethod
  public void recordDebit(DispatchedEvent<AccountDebitedEvent> de) {
    saveChange(de, -1);
  }

  @EventHandlerMethod
  public void recordCredit(DispatchedEvent<AccountCreditedEvent> de) {
    saveChange(de, +1);
  }

  @EventHandlerMethod
  public void updateDebitTransactionState(DispatchedEvent<DebitRecordedEvent> de) {
    String transactionId = de.getEntityId();
    String fromAccountId = de.getEvent().getDetails().getFromAccountId();
    String toAccountId = de.getEvent().getDetails().getToAccountId();

    accountInfoUpdateService.updateTransactionStatus(fromAccountId, transactionId, TransferState.DEBITED);
    accountInfoUpdateService.updateTransactionStatus(toAccountId, transactionId, TransferState.DEBITED);
  }

  @EventHandlerMethod
  public void updateCreditTransactionState(DispatchedEvent<CreditRecordedEvent> de) {
    String transactionId = de.getEntityId();
    String fromAccountId = de.getEvent().getDetails().getFromAccountId();
    String toAccountId = de.getEvent().getDetails().getToAccountId();

    accountInfoUpdateService.updateTransactionStatus(fromAccountId, transactionId, TransferState.COMPLETED);
    accountInfoUpdateService.updateTransactionStatus(toAccountId, transactionId, TransferState.COMPLETED);
  }

  @EventHandlerMethod
  public void recordFailed(DispatchedEvent<FailedDebitRecordedEvent> de) {
    String transactionId = de.getEntityId();
    String fromAccountId = de.getEvent().getDetails().getFromAccountId();
    String toAccountId = de.getEvent().getDetails().getToAccountId();

    accountInfoUpdateService.updateTransactionStatus(fromAccountId, transactionId, TransferState.FAILED_DUE_TO_INSUFFICIENT_FUNDS);
    accountInfoUpdateService.updateTransactionStatus(toAccountId, transactionId, TransferState.FAILED_DUE_TO_INSUFFICIENT_FUNDS);
  }

  public <T extends AccountChangedEvent> void saveChange(DispatchedEvent<T> de, int delta) {
    String changeId = de.getEventId().asString();
    String transactionId = de.getEvent().getTransactionId();
    long amount = toIntegerRepr(de.getEvent().getAmount());

    long balanceDelta = amount * delta;
    AccountChangeInfo ci = new AccountChangeInfo(changeId, transactionId, de.getEvent().getClass().getSimpleName(), amount, balanceDelta);
    String accountId = de.getEntityId();
    logger.info("**************** account version={}, {}", accountId, de.getEventId().asString());

    accountInfoUpdateService.updateBalance(accountId, changeId, balanceDelta, ci);
  }
}
