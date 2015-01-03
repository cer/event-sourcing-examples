package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.EntityWithMetadata;
import net.chrisrichardson.eventstore.EventStore;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.Account;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransfer;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.TransferState;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rx.Observable;

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
  private EventStore eventStore;

  @Autowired
  private AccountQueryService accountQueryService;

  @Test
  public void shouldUpdateQuerySide() throws Exception {

    final EntityWithIdAndVersion<Account> fromAccount = await(accountService.openAccount(new BigDecimal(150)));

    final EntityWithIdAndVersion<Account> toAccount = await(accountService.openAccount(new BigDecimal(300)));

    final EntityWithIdAndVersion<MoneyTransfer> transaction = await(
            moneyTransferService.transferMoney(new TransferDetails(fromAccount.getEntityIdentifier(),
                    toAccount.getEntityIdentifier(),
                    new BigDecimal(80))));

    eventually(
            new Producer<EntityWithMetadata<MoneyTransfer>>() {
              @Override
              public Observable<EntityWithMetadata<MoneyTransfer>> produce() {
                return eventStore.find(MoneyTransfer.class, transaction.getEntityIdentifier());
              }
            },
            new Verifier<EntityWithMetadata<MoneyTransfer>>() {
              @Override
              public void verify(EntityWithMetadata<MoneyTransfer> updatedTransaction) {
                Assert.assertEquals(TransferState.COMPLETED, updatedTransaction.entity().getState());
              }
            });

    eventually(
            new Producer<AccountInfo>() {
              @Override
              public Observable<AccountInfo> produce() {
                return accountQueryService.findByAccountId(fromAccount.getEntityIdentifier());
              }
            },
            new Verifier<AccountInfo>() {
              @Override
              public void verify(AccountInfo accountInfo) {
                Assert.assertEquals(70*100, accountInfo.getBalance());
              }
            });
    eventually(
            new Producer<AccountInfo>() {
              @Override
              public Observable<AccountInfo> produce() {
                return accountQueryService.findByAccountId(toAccount.getEntityIdentifier());
              }
            },
            new Verifier<AccountInfo>() {
              @Override
              public void verify(AccountInfo accountInfo) {
                Assert.assertEquals(380*100, accountInfo.getBalance());
              }
            });
  }
}
