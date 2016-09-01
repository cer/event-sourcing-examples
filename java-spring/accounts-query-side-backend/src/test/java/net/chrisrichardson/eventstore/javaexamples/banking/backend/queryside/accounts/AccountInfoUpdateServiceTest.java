package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import io.eventuate.javaclient.spring.jdbc.EventuateJdbcEventStoreConfiguration;
import io.eventuate.javaclient.spring.jdbc.IdGenerator;
import io.eventuate.javaclient.spring.jdbc.IdGeneratorImpl;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountCreditedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountTransactionInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.math.BigDecimal;
import java.util.Date;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = AccountInfoUpdateServiceTest.AccountInfoUpdateServiceTestConfiguration.class)
@IntegrationTest
public class AccountInfoUpdateServiceTest {

  @Configuration
  @EnableAutoConfiguration
  @Import({QuerySideAccountConfiguration.class, EventuateJdbcEventStoreConfiguration.class})
  public static class AccountInfoUpdateServiceTestConfiguration {

  }

  @Autowired
  private AccountInfoUpdateService accountInfoUpdateService;

  @Autowired
  private AccountQueryService accountQueryService;

  @Test
  public void shouldSaveAccountInfo() throws ExecutionException, InterruptedException {
    IdGenerator x = new IdGeneratorImpl();
    String accountId = x.genId().asString();
    String customerId = x.genId().asString();
    String version = x.genId().asString();

    String title = "Checking account";
    BigDecimal initialBalance = new BigDecimal("1345");
    String description = "Some account";

    accountInfoUpdateService.create(accountId, customerId, title, initialBalance, description, version);

    AccountInfo accountInfo = accountQueryService.findByAccountId(accountId).get();

    assertEquals(accountId, accountInfo.getId());
    assertEquals(customerId, accountInfo.getCustomerId());
    assertEquals(title, accountInfo.getTitle());
    assertEquals(description, accountInfo.getDescription());
    assertEquals(initialBalance.longValue() * 100, accountInfo.getBalance());
    assertTrue(accountInfo.getChanges().isEmpty());
    assertTrue(accountInfo.getTransactions().isEmpty());
    assertEquals(version, accountInfo.getVersion());


    String changeId = x.genId().asString();

    String transactionId = x.genId().asString();

    AccountChangeInfo change = new AccountChangeInfo(changeId, transactionId, AccountCreditedEvent.class.getSimpleName(),
            500, +1);

    accountInfoUpdateService.updateBalance(accountId, changeId, 500,
            change);

    accountInfo = accountQueryService.findByAccountId(accountId).get();
    assertEquals(initialBalance.add(new BigDecimal(5)).longValue() * 100, accountInfo.getBalance());
    assertFalse(accountInfo.getChanges().isEmpty());

    assertEquals(change, accountInfo.getChanges().get(0));

    String eventId = x.genId().asString();

    AccountTransactionInfo ti = new AccountTransactionInfo(transactionId, accountId, accountId, 5, new Date(), "A transfer");

    accountInfoUpdateService.addTransaction(eventId, accountId, ti);

    accountInfo = accountQueryService.findByAccountId(accountId).get();
    assertFalse(accountInfo.getTransactions().isEmpty());

    assertEquals(ti, accountInfo.getTransactions().get(0));
  }

}