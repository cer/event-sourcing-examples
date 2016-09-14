package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import io.eventuate.javaclient.spring.jdbc.EventuateJdbcEventStoreConfiguration;
import io.eventuate.javaclient.spring.jdbc.IdGenerator;
import io.eventuate.javaclient.spring.jdbc.IdGeneratorImpl;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.accounts.AccountCreditedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountChangeInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountTransactionInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.TransferState;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.math.BigDecimal;
import java.util.Date;
import java.util.concurrent.ExecutionException;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateCustomerInfo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CustomerInfoUpdateServiceTest.CustomerInfoUpdateServiceTestConfiguration.class)
@IntegrationTest
public class CustomerInfoUpdateServiceTest {

  @Configuration
  @EnableAutoConfiguration
  @Import({QuerySideCustomerConfiguration.class, EventuateJdbcEventStoreConfiguration.class})
  public static class CustomerInfoUpdateServiceTestConfiguration {

  }

  @Autowired
  private CustomerInfoUpdateService customerInfoUpdateService;

  @Autowired
  private CustomerQueryService customerQueryService;

  @Test
  public void shouldSaveQuerysideCustomer() throws ExecutionException, InterruptedException {
    IdGenerator x = new IdGeneratorImpl();
    String customerId = x.genId().asString();

    CustomerInfo customerInfo = generateCustomerInfo();
    customerInfoUpdateService.create(customerId, customerInfo);

    QuerySideCustomer querySideCustomer = customerQueryService.findByCustomerId(customerId).get();

    assertEquals(customerInfo.getName(), querySideCustomer.getName());
    assertEquals(customerInfo.getAddress(), querySideCustomer.getAddress());
    assertEquals(customerInfo.getEmail(), querySideCustomer.getEmail());
    assertEquals(customerInfo.getPhoneNumber(), querySideCustomer.getPhoneNumber());
    assertEquals(customerInfo.getSsn(), querySideCustomer.getSsn());
  }

  @Test
  public void shouldAddAndDeleteToAccount() throws ExecutionException, InterruptedException {
    IdGenerator x = new IdGeneratorImpl();
    String customerId = x.genId().asString();
    String accountId = x.genId().asString();

    CustomerInfo customerInfo = generateCustomerInfo();
    customerInfoUpdateService.create(customerId, customerInfo);

    ToAccountInfo toAccountInfo = new ToAccountInfo(accountId, "title", "owner", "description");

    customerInfoUpdateService.addToAccount(customerId, toAccountInfo);

    QuerySideCustomer querySideCustomer = customerQueryService.findByCustomerId(customerId).get();

    assertTrue(querySideCustomer.getToAccounts().containsKey(accountId));
    assertEquals(toAccountInfo, querySideCustomer.getToAccounts().get(accountId));

    customerInfoUpdateService.deleteFromToAccount(accountId);
    querySideCustomer = customerQueryService.findByCustomerId(customerId).get();

    assertFalse(querySideCustomer.getToAccounts().containsKey(accountId));
  }
}