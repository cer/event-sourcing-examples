package net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend;

import io.eventuate.Event;
import io.eventuate.EventUtil;
import io.eventuate.ReflectiveMutableCommandProcessingAggregate;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.*;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.TransferState;

import java.util.List;

public class MoneyTransfer extends ReflectiveMutableCommandProcessingAggregate<MoneyTransfer, MoneyTransferCommand> {

  private TransferDetails details;
  private TransferState state;

  public List<Event> process(CreateMoneyTransferCommand cmd) {
    return EventUtil.events(new MoneyTransferCreatedEvent(cmd.getDetails()));
  }

  public List<Event> process(RecordDebitCommand cmd) {
    return EventUtil.events(new DebitRecordedEvent(details));
  }

  public List<Event> process(RecordDebitFailedCommand cmd) {
    return EventUtil.events(new FailedDebitRecordedEvent(details));
  }

  public List<Event> process(RecordCreditCommand cmd) {
    return EventUtil.events(new CreditRecordedEvent(details));
  }

  public void apply(MoneyTransferCreatedEvent event) {
    this.details = event.getDetails();
    this.state = TransferState.INITIAL;
  }

  public void apply(DebitRecordedEvent event) {
    this.state = TransferState.DEBITED;
  }

  public void apply(FailedDebitRecordedEvent event) {
    this.state = TransferState.FAILED_DUE_TO_INSUFFICIENT_FUNDS;
  }

  public void apply(CreditRecordedEvent event) {
    this.state = TransferState.COMPLETED;
  }


  public TransferState getState() {
    return state;
  }
}
