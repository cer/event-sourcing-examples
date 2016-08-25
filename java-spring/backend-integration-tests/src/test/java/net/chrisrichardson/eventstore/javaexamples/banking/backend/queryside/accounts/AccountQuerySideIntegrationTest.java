package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import io.eventuate.EntityWithIdAndVersion;
import io.eventuate.EventuateAggregateStore;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.Account;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransfer;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.TransferState;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
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
@SpringApplicationConfiguration(classes = AccountQuerySideTestConfiguration.class)
@IntegrationTest
public class AccountQuerySideIntegrationTest {

  @Autowired
  private AccountService accountService;

  @Autowired
  private MoneyTransferService moneyTransferService;

  @Autowired
  private EventuateAggregateStore eventStore;

  @Autowired
  private AccountQueryService accountQueryService;

  @Test
  public void shouldUpdateQuerySide() throws Exception {

    final EntityWithIdAndVersion<Account> fromAccount = await(accountService.openAccount("00000000-00000000", "My Account", new BigDecimal(150), ""));

    final EntityWithIdAndVersion<Account> toAccount = await(accountService.openAccount("00000000-00000000", "My Account", new BigDecimal(300), ""));

    final EntityWithIdAndVersion<MoneyTransfer> transaction = await(
            moneyTransferService.transferMoney(new TransferDetails(fromAccount.getEntityId(),
                    toAccount.getEntityId(),
                    new BigDecimal(80))));

    eventually(
            () -> eventStore.find(MoneyTransfer.class, transaction.getEntityId()),
            updatedTransaction -> Assert.assertEquals(TransferState.COMPLETED, updatedTransaction.getEntity().getState()));

    eventually(
            () -> accountQueryService.findByAccountId(fromAccount.getEntityId()),
            accountInfo -> Assert.assertEquals(70 * 100, accountInfo.getBalance()));
    eventually(
            () -> accountQueryService.findByAccountId(toAccount.getEntityId()),
            accountInfo -> Assert.assertEquals(380 * 100, accountInfo.getBalance()));
  }
}
