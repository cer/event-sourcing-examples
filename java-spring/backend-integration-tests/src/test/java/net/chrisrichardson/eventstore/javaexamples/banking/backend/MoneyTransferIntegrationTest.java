package net.chrisrichardson.eventstore.javaexamples.banking.backend;

import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.EntityWithMetadata;
import net.chrisrichardson.eventstore.EventStore;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.Account;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.accounts.AccountService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransfer;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.MoneyTransferService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.transactions.TransferDetails;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.transactions.TransferState;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rx.Observable;

import java.math.BigDecimal;

import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.await;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes=BankingTestConfiguration.class)
@IntegrationTest
public class MoneyTransferIntegrationTest {

  @Autowired
  private AccountService accountService;

  @Autowired
  private MoneyTransferService moneyTransferService;

  @Autowired
  private EventStore eventStore;
  

  @Test
  public void shouldTransferMoney() {
    final EntityWithIdAndVersion<Account> fromAccount= await(accountService.openAccount(new BigDecimal(150)));

    final EntityWithIdAndVersion<Account> toAccount = await(accountService.openAccount(new BigDecimal(300)));

    final EntityWithIdAndVersion<MoneyTransfer> transaction = await(
            moneyTransferService.transferMoney(new TransferDetails(fromAccount.getEntityIdentifier(),
                    toAccount.getEntityIdentifier(),
                    new BigDecimal(80))));


    eventually (
      new Producer<EntityWithMetadata<Account>>() {
        @Override
        public Observable<EntityWithMetadata<Account>> produce() {
          return (Observable<EntityWithMetadata<Account>>)eventStore.find(Account.class, fromAccount.getEntityIdentifier());
        }
      },
      new Verifier<EntityWithMetadata<Account>>() {
        @Override
        public void verify(EntityWithMetadata<Account> account) {
          Assert.assertEquals(new BigDecimal(70), account.entity().getBalance());
        }
      });

    eventually (
      new Producer<EntityWithMetadata<Account>>() {
        @Override
        public Observable<EntityWithMetadata<Account>> produce() {
          return (Observable<EntityWithMetadata<Account>>)eventStore.find(Account.class, toAccount.getEntityIdentifier());
        }
      },
      new Verifier<EntityWithMetadata<Account>>() {
        @Override
        public void verify(EntityWithMetadata<Account> account) {
          Assert.assertEquals(new BigDecimal(380), account.entity().getBalance());
        }
      });

    eventually (
            new Producer<EntityWithMetadata<MoneyTransfer>>() {
              @Override
              public Observable<EntityWithMetadata<MoneyTransfer>> produce() {
                return (Observable<EntityWithMetadata<MoneyTransfer>>)eventStore.find(MoneyTransfer.class, transaction.getEntityIdentifier());
              }
            },
            new Verifier<EntityWithMetadata<MoneyTransfer>>() {
              @Override
              public void verify(EntityWithMetadata<MoneyTransfer> updatedTransaction) {
                Assert.assertEquals(TransferState.COMPLETED, updatedTransaction.entity().getState());
              }
            });
  }

  @Test
  public void shouldFailDueToInsufficientFunds() {
    final EntityWithIdAndVersion<Account> fromAccount= await(accountService.openAccount(new BigDecimal(150)));

    final EntityWithIdAndVersion<Account> toAccount = await(accountService.openAccount(new BigDecimal(300)));

    final EntityWithIdAndVersion<MoneyTransfer> transaction = await(
            moneyTransferService.transferMoney(new TransferDetails(fromAccount.getEntityIdentifier(),
                    toAccount.getEntityIdentifier(),
                    new BigDecimal(200))));


    eventually (
            new Producer<EntityWithMetadata<MoneyTransfer>>() {
              @Override
              public Observable<EntityWithMetadata<MoneyTransfer>> produce() {
                return (Observable<EntityWithMetadata<MoneyTransfer>>)eventStore.find(MoneyTransfer.class, transaction.getEntityIdentifier());
              }
            },
            new Verifier<EntityWithMetadata<MoneyTransfer>>() {
              @Override
              public void verify(EntityWithMetadata<MoneyTransfer> updatedTransaction) {
                Assert.assertEquals(TransferState.FAILED_DUE_TO_INSUFFICIENT_FUNDS, updatedTransaction.entity().getState());
              }
            });

    eventually (
      new Producer<EntityWithMetadata<Account>>() {
        @Override
        public Observable<EntityWithMetadata<Account>> produce() {
          return (Observable<EntityWithMetadata<Account>>)eventStore.find(Account.class, fromAccount.getEntityIdentifier());
        }
      },
      new Verifier<EntityWithMetadata<Account>>() {
        @Override
        public void verify(EntityWithMetadata<Account> account) {
          Assert.assertEquals(new BigDecimal(150), account.entity().getBalance());
        }
      });

    eventually (
      new Producer<EntityWithMetadata<Account>>() {
        @Override
        public Observable<EntityWithMetadata<Account>> produce() {
          return (Observable<EntityWithMetadata<Account>>)eventStore.find(Account.class, toAccount.getEntityIdentifier());
        }
      },
      new Verifier<EntityWithMetadata<Account>>() {
        @Override
        public void verify(EntityWithMetadata<Account> account) {
          Assert.assertEquals(new BigDecimal(300), account.entity().getBalance());
        }
      });

  }


}
