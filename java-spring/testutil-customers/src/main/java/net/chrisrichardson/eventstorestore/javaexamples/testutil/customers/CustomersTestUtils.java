package net.chrisrichardson.eventstorestore.javaexamples.testutil.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.*;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.utils.BasicAuthUtils;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import org.junit.Assert;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;
import rx.Observable;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;

/**
 * Created by popikyardo on 02.03.16.
 */
public class CustomersTestUtils {

    private RestTemplate restTemplate;
    private String customersBaseUrl;

    public CustomersTestUtils(RestTemplate restTemplate, String customersBaseUrl) {
        this.restTemplate = restTemplate;
        this.customersBaseUrl = customersBaseUrl;
    }

    public void assertCustomerResponse(final String customerId, final CustomerInfo customerInfo) {
        eventually(
                new Producer<QuerySideCustomer>() {
                    @Override
                    public Observable<QuerySideCustomer> produce() {
                        return Observable.just(BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                                customersBaseUrl + customerId,
                                HttpMethod.GET,
                                QuerySideCustomer.class));
                    }
                },
                new Verifier<QuerySideCustomer>() {
                    @Override
                    public void verify(QuerySideCustomer querySideCustomer) {
                        Assert.assertEquals(customerId, querySideCustomer.getId());
                        assertQuerySideCustomerEqualscCustomerInfo(querySideCustomer, customerInfo);
                    }
                });
    }

    public void assertQuerySideCustomerEqualscCustomerInfo(QuerySideCustomer querySideCustomer, CustomerInfo customerInfo) {
        Assert.assertEquals(querySideCustomer.getName(), customerInfo.getName());
        Assert.assertEquals(querySideCustomer.getEmail(), customerInfo.getEmail());
        Assert.assertEquals(querySideCustomer.getPhoneNumber(), customerInfo.getPhoneNumber());
        Assert.assertEquals(querySideCustomer.getSsn(), customerInfo.getSsn());
        Assert.assertEquals(querySideCustomer.getAddress(), customerInfo.getAddress());
    }

    public static CustomerInfo generateCustomerInfo() {
        return generateCustomerInfo("current@email.com");
    }

    public static CustomerInfo generateCustomerInfo(String email) {
        return new CustomerInfo(
                new Name("John", "Doe"),
                email,
                "000-00-0000",
                "1-111-111-1111",
                new Address("street 1",
                        "street 2",
                        "City",
                        "State",
                        "1111111")
        );
    }

    public static ToAccountInfo generateToAccountInfo() {
        return new ToAccountInfo("11111111-11111111", "New Account", "John Doe","");
    }
}
