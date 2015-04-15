package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions;


import net.chrisrichardson.eventstore.javaapi.consumer.EventHandlerContext;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountCreditedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountDebitFailedDueToInsufficientFundsEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountDebitedEvent;
import net.chrisrichardson.eventstore.subscriptions.CompoundEventHandler;
import net.chrisrichardson.eventstore.subscriptions.EventHandlerMethod;
import net.chrisrichardson.eventstore.subscriptions.EventSubscriber;
import rx.Observable;

@EventSubscriber(id="transferEventHandlers")
public class MoneyTransferWorkflow implements CompoundEventHandler {

  @EventHandlerMethod
  public Observable<?> recordDebit(EventHandlerContext<AccountDebitedEvent> ctx) {
    return ctx.update(MoneyTransfer.class, ctx.getEvent().getTransactionId(), new RecordDebitCommand());
  }

  @EventHandlerMethod
  public Observable<?> recordDebitFailed(EventHandlerContext<AccountDebitFailedDueToInsufficientFundsEvent> ctx) {
    return ctx.update(MoneyTransfer.class, ctx.getEvent().getTransactionId(), new RecordDebitFailedCommand());
  }

  @EventHandlerMethod
  public Observable<?> recordCredit(EventHandlerContext<AccountCreditedEvent> ctx) {
    return ctx.update(MoneyTransfer.class, ctx.getEvent().getTransactionId(), new RecordCreditCommand());
  }


}
