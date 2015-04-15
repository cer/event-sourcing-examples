package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;

import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.javaapi.consumer.EventHandlerContext;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.DebitRecordedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.MoneyTransferCreatedEvent;
import net.chrisrichardson.eventstore.subscriptions.*;
import rx.Observable;

import java.math.BigDecimal;

@EventSubscriber(id="accountEventHandlers")
public class AccountWorkflow implements CompoundEventHandler {

  @EventHandlerMethod
  public Observable<?> debitAccount(EventHandlerContext<MoneyTransferCreatedEvent> ctx) {
    MoneyTransferCreatedEvent event = ctx.getEvent();
    BigDecimal amount = event.getDetails().getAmount();
    EntityIdentifier transactionId = ctx.getEntityIdentifier();

    EntityIdentifier fromAccountId = event.getDetails().getFromAccountId();

    return ctx.update(Account.class, fromAccountId, new DebitAccountCommand(amount, transactionId));
  }

  @EventHandlerMethod
  public Observable<?> creditAccount(EventHandlerContext<DebitRecordedEvent> ctx) {
    DebitRecordedEvent event = ctx.getEvent();
    BigDecimal amount = event.getDetails().getAmount();
    EntityIdentifier fromAccountId = event.getDetails().getToAccountId();
    EntityIdentifier transactionId = ctx.getEntityIdentifier();

    return ctx.update(Account.class, fromAccountId, new CreditAccountCommand(amount, transactionId));
  }

}
