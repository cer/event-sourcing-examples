package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import io.eventuate.EntityWithIdAndVersion;
import io.eventuate.EventuateAggregateStore;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend.Customer;
import net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend.CustomerService;
import net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.backend.CustomerQueryService;
import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.concurrent.CompletableFuture;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateCustomerInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateToAccountInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.await;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;

/**
 * Created by Main on 10.02.2016.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CustomerQuerySideTestConfiguration.class)
@IntegrationTest
public class CustomerQuerySideIntegrationTest {

  @Autowired
  private CustomerService customerService;

  @Autowired
  private CustomerQueryService customerQueryService;

  @Autowired
  private EventuateAggregateStore eventStore;

  @Test
  public void shouldCreateCustomerAndAddToAccount() throws Exception {
    CustomerInfo customerInfo = generateCustomerInfo();
    EntityWithIdAndVersion<Customer> customer = await(customerService.createCustomer(customerInfo));

    ToAccountInfo toAccountInfo = generateToAccountInfo();
    EntityWithIdAndVersion<Customer> customerWithNewAccount = await(customerService.addToAccount(customer.getEntityId(), toAccountInfo));

    eventually(
            new Producer<QuerySideCustomer>() {
              @Override
              public CompletableFuture<QuerySideCustomer> produce() {
                return customerQueryService.findByCustomerId(customer.getEntityId());
              }
            },
            new Verifier<QuerySideCustomer>() {
              @Override
              public void verify(QuerySideCustomer querySideCustomer) {
                Assert.assertEquals(customerInfo.getName(), querySideCustomer.getName());
                Assert.assertEquals(customerInfo.getSsn(), querySideCustomer.getSsn());
                Assert.assertEquals(customerInfo.getUserCredentials().getEmail(), querySideCustomer.getEmail());
                Assert.assertEquals(customerInfo.getPhoneNumber(), querySideCustomer.getPhoneNumber());
                Assert.assertEquals(customerInfo.getAddress(), querySideCustomer.getAddress());

                Assert.assertNotNull(querySideCustomer.getToAccounts());
                Assert.assertFalse(querySideCustomer.getToAccounts().isEmpty());
                Assert.assertEquals(querySideCustomer.getToAccounts().get("11111111-11111111"), toAccountInfo);
              }
            });
  }
}
