package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;


import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountChangedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountCreditedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountDebitedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountOpenedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.MoneyTransferCreatedEvent;
import net.chrisrichardson.eventstore.subscriptions.CompoundEventHandler;
import net.chrisrichardson.eventstore.subscriptions.DispatchedEvent;
import net.chrisrichardson.eventstore.subscriptions.EventHandlerMethod;
import net.chrisrichardson.eventstore.subscriptions.EventSubscriber;
import rx.Observable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;

import static net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.MoneyUtil.toIntegerRepr;

@EventSubscriber(id="querySideEventHandlers")
public class AccountQueryWorkflow implements CompoundEventHandler {

  private Logger logger = LoggerFactory.getLogger(getClass());

  private AccountInfoUpdateService accountInfoUpdateService;

  public AccountQueryWorkflow(AccountInfoUpdateService accountInfoUpdateService) {
    this.accountInfoUpdateService = accountInfoUpdateService;
  }

  @EventHandlerMethod
  public Observable<Object> create(DispatchedEvent<AccountOpenedEvent> de) {
    AccountOpenedEvent event = de.event();
    String id = de.getEntityIdentifier().getId();
    String eventId = de.eventId().asString();
    logger.info("**************** account version=" + id + ", " + eventId);
    BigDecimal initialBalance = event.getInitialBalance();
    accountInfoUpdateService.create(id, initialBalance, eventId);
    return Observable.just(null);
  }

  @EventHandlerMethod
  public Observable<Object> recordTransfer(DispatchedEvent<MoneyTransferCreatedEvent> de) {
    String eventId = de.eventId().asString();
    String moneyTransferId = de.getEntityIdentifier().getId();
    String fromAccountId = de.event().getDetails().getFromAccountId().getId();
    String toAccountId = de.event().getDetails().getToAccountId().getId();
    logger.info("**************** account version=" + fromAccountId + ", " + de.eventId().asString());
    logger.info("**************** account version=" + toAccountId + ", " + de.eventId().asString());

    AccountTransactionInfo ti = new AccountTransactionInfo(moneyTransferId, fromAccountId, toAccountId, toIntegerRepr(de.event().getDetails().getAmount()));


    accountInfoUpdateService.addTransaction(eventId, fromAccountId, ti);
    accountInfoUpdateService.addTransaction(eventId, toAccountId, ti);

    return Observable.just(null);

  }

  @EventHandlerMethod
  public Observable<Object> recordDebit(DispatchedEvent<AccountDebitedEvent> de) {
    return saveChange(de, -1);
  }

  @EventHandlerMethod
  public Observable<Object> recordCredit(DispatchedEvent<AccountCreditedEvent> de) {
    return saveChange(de, +1);
  }

  public <T extends AccountChangedEvent> Observable<Object> saveChange(DispatchedEvent<T> de, int delta) {
    String changeId = de.eventId().asString();
    String transactionId = de.event().getTransactionId().getId();
    long amount = toIntegerRepr(de.event().getAmount());

    long balanceDelta = amount * delta;
    AccountChangeInfo ci = new AccountChangeInfo(changeId, transactionId, de.event().getClass().getSimpleName(), amount, balanceDelta);
    String accountId = de.getEntityIdentifier().getId();
    logger.info("**************** account version=" + accountId + ", " + de.eventId().asString());

    accountInfoUpdateService.updateBalance(accountId, changeId, balanceDelta, ci);

    return Observable.just(null);

  }

}
