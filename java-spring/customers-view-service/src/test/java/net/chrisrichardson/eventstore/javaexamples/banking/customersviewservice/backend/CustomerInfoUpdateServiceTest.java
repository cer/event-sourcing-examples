package net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.backend;

import io.eventuate.javaclient.spring.jdbc.EmbeddedTestAggregateStoreConfiguration;
import io.eventuate.javaclient.spring.jdbc.IdGenerator;
import io.eventuate.javaclient.spring.jdbc.IdGeneratorImpl;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.concurrent.ExecutionException;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateCustomerInfo;
import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CustomerInfoUpdateServiceTest.CustomerInfoUpdateServiceTestConfiguration.class)
@IntegrationTest
public class CustomerInfoUpdateServiceTest {

  @Configuration
  @EnableAutoConfiguration
  @Import({CustomerViewBackendConfiguration.class, EmbeddedTestAggregateStoreConfiguration.class})
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
    assertEquals(customerInfo.getUserCredentials().getEmail(), querySideCustomer.getEmail());
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

    customerInfoUpdateService.deleteToAccountFromAllCustomers(accountId);
    querySideCustomer = customerQueryService.findByCustomerId(customerId).get();

    assertFalse(querySideCustomer.getToAccounts().containsKey(accountId));
  }
}