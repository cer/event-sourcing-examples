package net.chrisrichardson.eventstore.javaexamples.banking.backend;

import io.eventuate.EntityWithIdAndVersion;
import io.eventuate.EventuateAggregateStore;
import net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.backend.Account;
import net.chrisrichardson.eventstore.javaexamples.banking.accountsservice.backend.AccountService;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.TransferState;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
import net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend.MoneyTransfer;
import net.chrisrichardson.eventstore.javaexamples.banking.transactionsservice.backend.MoneyTransferService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.math.BigDecimal;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.await;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = BankingTestConfiguration.class)
@IntegrationTest
public class MoneyTransferIntegrationTest {

  @Autowired
  private AccountService accountService;

  @Autowired
  private MoneyTransferService moneyTransferService;

  @Autowired
  private EventuateAggregateStore eventStore;


  @Test
  public void shouldTransferMoney() {
    final EntityWithIdAndVersion<Account> fromAccount = await(accountService.openAccount("00000000-00000000", "My Account", new BigDecimal(150), ""));

    final EntityWithIdAndVersion<Account> toAccount = await(accountService.openAccount("00000000-00000000", "My Account", new BigDecimal(300), ""));

    final EntityWithIdAndVersion<MoneyTransfer> transaction = await(
            moneyTransferService.transferMoney(new TransferDetails(fromAccount.getEntityId(),
                    toAccount.getEntityId(),
                    new BigDecimal(80))));


    eventually(
            () -> eventStore.find(Account.class, fromAccount.getEntityId()),
            account -> Assert.assertEquals(new BigDecimal(70), account.getEntity().getBalance()));

    eventually(
            () -> eventStore.find(Account.class, toAccount.getEntityId()),
            account -> Assert.assertEquals(new BigDecimal(380), account.getEntity().getBalance()));

    eventually(
            () -> eventStore.find(MoneyTransfer.class, transaction.getEntityId()),
            updatedTransaction -> Assert.assertEquals(TransferState.COMPLETED, updatedTransaction.getEntity().getState()));
  }

  @Test
  public void shouldFailDueToInsufficientFunds() {
    final EntityWithIdAndVersion<Account> fromAccount = await(accountService.openAccount("00000000-00000000", "My Account", new BigDecimal(150), ""));

    final EntityWithIdAndVersion<Account> toAccount = await(accountService.openAccount("00000000-00000000", "My Account", new BigDecimal(300), ""));

    final EntityWithIdAndVersion<MoneyTransfer> transaction = await(
            moneyTransferService.transferMoney(new TransferDetails(fromAccount.getEntityId(),
                    toAccount.getEntityId(),
                    new BigDecimal(200))));


    eventually(
            () -> eventStore.find(MoneyTransfer.class, transaction.getEntityId()),
            updatedTransaction -> Assert.assertEquals(TransferState.FAILED_DUE_TO_INSUFFICIENT_FUNDS, updatedTransaction.getEntity().getState()));

    eventually(
            () -> eventStore.find(Account.class, fromAccount.getEntityId()),
            account -> Assert.assertEquals(new BigDecimal(150), account.getEntity().getBalance()));

    eventually(
            () -> eventStore.find(Account.class, toAccount.getEntityId()),
            account -> Assert.assertEquals(new BigDecimal(300), account.getEntity().getBalance()));

  }


}
