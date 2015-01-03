package net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts;

import net.chrisrichardson.eventstore.Event;
import net.chrisrichardson.eventstore.EventUtil;
import net.chrisrichardson.eventstore.ReflectiveMutableCommandProcessingAggregate;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountCreditedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountDebitFailedDueToInsufficientFundsEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountDebitedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountOpenedEvent;

import java.math.BigDecimal;
import java.util.List;

public class Account extends ReflectiveMutableCommandProcessingAggregate<Account, AccountCommand> {

  private BigDecimal balance;

  public List<Event> process(OpenAccountCommand cmd) {
    return EventUtil.events(new AccountOpenedEvent(cmd.getInitialBalance()));
  }

  public List<Event> process(DebitAccountCommand cmd) {
    if (balance.compareTo(cmd.getAmount()) < 0)
      return EventUtil.events(new AccountDebitFailedDueToInsufficientFundsEvent(cmd.getTransactionId()));
    else
      return EventUtil.events(new AccountDebitedEvent(cmd.getAmount(), cmd.getTransactionId()));
  }

  public List<Event> process(CreditAccountCommand cmd) {
    return EventUtil.events(new AccountCreditedEvent(cmd.getAmount(), cmd.getTransactionId()));
  }

  public void apply(AccountOpenedEvent event) {
    balance = event.getInitialBalance();
  }

  public void apply(AccountDebitedEvent event) {
    balance = balance.subtract(event.getAmount());
  }

  public void apply(AccountDebitFailedDueToInsufficientFundsEvent event) {
  }

  public void apply(AccountCreditedEvent event) {
    balance = balance.add(event.getAmount());
  }

  public BigDecimal getBalance() {
    return balance;
  }
}


