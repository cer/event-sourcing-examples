package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.EntityWithIdAndVersion;
import net.chrisrichardson.eventstore.EventStore;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.Customer;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerService;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.*;
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

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.await;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils.generateCustomerInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils.generateToAccountInfo;

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
    private EventStore eventStore;

    @Test
    public void shouldCreateCustomerAndAddToAccount() throws Exception {
        CustomerInfo customerInfo = generateCustomerInfo();
        EntityWithIdAndVersion<Customer> customer = await(customerService.createCustomer(customerInfo));

        ToAccountInfo toAccountInfo = generateToAccountInfo();
        EntityWithIdAndVersion<Customer> customerWithNewAccount = await(customerService.addToAccount(customer.getEntityIdentifier().getId(), toAccountInfo));

        eventually(
                new Producer<QuerySideCustomer>() {
                    @Override
                    public Observable<QuerySideCustomer> produce() {
                        return customerQueryService.findByCustomerId(customer.getEntityIdentifier());
                    }
                },
                new Verifier<QuerySideCustomer>() {
                    @Override
                    public void verify(QuerySideCustomer querySideCustomer) {
                        Assert.assertEquals(customerInfo.getName(), querySideCustomer.getName());
                        Assert.assertEquals(customerInfo.getSsn(), querySideCustomer.getSsn());
                        Assert.assertEquals(customerInfo.getEmail(), querySideCustomer.getEmail());
                        Assert.assertEquals(customerInfo.getPhoneNumber(), querySideCustomer.getPhoneNumber());
                        Assert.assertEquals(customerInfo.getAddress(), querySideCustomer.getAddress());

                        Assert.assertNotNull(querySideCustomer.getToAccounts());
                        Assert.assertFalse(querySideCustomer.getToAccounts().isEmpty());
                        Assert.assertEquals(querySideCustomer.getToAccounts().get("11111111-11111111"), toAccountInfo);
                    }
                });
    }
}
