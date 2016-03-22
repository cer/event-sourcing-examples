package net.chrisrichardson.eventstore.javaexamples.banking.web;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountTransactionInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.*;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.utils.BasicAuthUtils;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CreateAccountRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CreateAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CreateMoneyTransferRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CreateMoneyTransferResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.accounts.GetAccountResponse;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;
import rx.Observable;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.util.List;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils.generateCustomerInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils.generateToAccountInfo;
import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = BankingWebTestConfiguration.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0", "management.port=0"})
public class BankingWebIntegrationTest {

    @Value("${local.server.port}")
    private int port;

    private String baseUrl(String path) {
        return "http://localhost:" + port + "/" + path;
    }

    @Autowired
    RestTemplate restTemplate;

    CustomersTestUtils customersTestUtils;

    @PostConstruct
    private void init() {
        customersTestUtils = new CustomersTestUtils(restTemplate, baseUrl("/customers/"));
    }


    @Test
    public void shouldCreateAccountsAndTransferMoney() {
        BigDecimal initialFromAccountBalance = new BigDecimal(500);
        BigDecimal initialToAccountBalance = new BigDecimal(100);
        BigDecimal amountToTransfer = new BigDecimal(150);

        BigDecimal finalFromAccountBalance = initialFromAccountBalance.subtract(amountToTransfer);
        BigDecimal finalToAccountBalance = initialToAccountBalance.add(amountToTransfer);

        final CreateAccountResponse fromAccount = BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                baseUrl("/accounts"),
                HttpMethod.POST,
                CreateAccountResponse.class,
                new CreateAccountRequest("00000000-00000000", "My 1 Account", "", initialFromAccountBalance)
        );
        final String fromAccountId = fromAccount.getAccountId();

        CreateAccountResponse toAccount = BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                baseUrl("/accounts"),
                HttpMethod.POST,
                CreateAccountResponse.class,
                new CreateAccountRequest("00000000-00000000", "My 2 Account", "", initialToAccountBalance)
        );

        String toAccountId = toAccount.getAccountId();

        Assert.assertNotNull(fromAccountId);
        Assert.assertNotNull(toAccountId);

        assertAccountBalance(fromAccountId, initialFromAccountBalance);
        assertAccountBalance(toAccountId, initialToAccountBalance);


        final CreateMoneyTransferResponse moneyTransfer = BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                baseUrl("/transfers"),
                HttpMethod.POST,
                CreateMoneyTransferResponse.class,
                new CreateMoneyTransferRequest(fromAccountId, toAccountId, amountToTransfer, "")
        );

        assertAccountBalance(fromAccountId, finalFromAccountBalance);
        assertAccountBalance(toAccountId, finalToAccountBalance);

        List<AccountTransactionInfo> transactionInfoList = restTemplate.exchange(baseUrl("/accounts/"+fromAccountId+"/history"),
                HttpMethod.GET,
                new HttpEntity(BasicAuthUtils.basicAuthHeaders("test_user@mail.com")),
                new ParameterizedTypeReference<List<AccountTransactionInfo>>() {}).getBody();


        assertTrue(transactionInfoList.stream().filter(ti -> ti.getTransactionId().equals(moneyTransfer.getMoneyTransferId()) &&
                                                            ti.getFromAccountId().equals(fromAccountId) &&
                                                            ti.getToAccountId().equals(toAccountId) &&
                                                            ti.getAmount() == toCents(amountToTransfer).longValue()).findFirst().isPresent());
    }

    @Test
    public void shouldCreateAccountsAndGetByCustomer() {
        BigDecimal initialFromAccountBalance = new BigDecimal(500);
        CustomerInfo customerInfo = generateCustomerInfo();

        final CustomerResponse customerResponse = restTemplate.postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
        final String customerId = customerResponse.getId();

        Assert.assertNotNull(customerId);
        Assert.assertEquals(customerInfo, customerResponse.getCustomerInfo());

        customersTestUtils.assertCustomerResponse(customerId, customerInfo);

        final CreateAccountResponse account = BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                baseUrl("/accounts"),
                HttpMethod.POST,
                CreateAccountResponse.class,
                new CreateAccountRequest(customerId, "My 1 Account", "", initialFromAccountBalance)
        );
        final String accountId = account.getAccountId();

        Assert.assertNotNull(accountId);

        assertAccountBalance(accountId, initialFromAccountBalance);

        List<GetAccountResponse> accountResponseList = restTemplate.exchange(baseUrl("/accounts?customerId="+customerId),
                HttpMethod.GET,
                new HttpEntity(BasicAuthUtils.basicAuthHeaders("test_user@mail.com")),
                new ParameterizedTypeReference<List<GetAccountResponse>>() {}).getBody();

        assertTrue(accountResponseList.stream().filter(acc -> acc.getAccountId().equals(accountId)).findFirst().isPresent());
    }

    @Test
    public void shouldCreateCustomersAndAddToAccount() {
        CustomerInfo customerInfo = generateCustomerInfo();

        final CustomerResponse customerResponse = restTemplate.postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
        final String customerId = customerResponse.getId();

        Assert.assertNotNull(customerId);
        Assert.assertEquals(customerInfo, customerResponse.getCustomerInfo());

        customersTestUtils.assertCustomerResponse(customerId, customerInfo);

        ToAccountInfo toAccountInfo = generateToAccountInfo();

        BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                baseUrl("/customers/"+customerId+"/toaccounts"),
                HttpMethod.POST,
                null,
                toAccountInfo
        );

        assertToAccountsContains(customerId, toAccountInfo);
    }

    private BigDecimal toCents(BigDecimal dollarAmount) {
        return dollarAmount.multiply(new BigDecimal(100));
    }

    private void assertAccountBalance(final String fromAccountId, final BigDecimal expectedBalanceInDollars) {
        final BigDecimal inCents = toCents(expectedBalanceInDollars);
        eventually(
                new Producer<GetAccountResponse>() {
                    @Override
                    public Observable<GetAccountResponse> produce() {
                        return Observable.just(BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                                        baseUrl("/accounts/" + fromAccountId),
                                        HttpMethod.GET,
                                        GetAccountResponse.class));
                    }
                },
                new Verifier<GetAccountResponse>() {
                    @Override
                    public void verify(GetAccountResponse accountInfo) {
                        Assert.assertEquals(fromAccountId, accountInfo.getAccountId());
                        Assert.assertEquals(inCents, accountInfo.getBalance());
                    }
                });
    }

    private void assertToAccountsContains(final String customerId, final ToAccountInfo toAccountInfo) {
        eventually(
                new Producer<QuerySideCustomer>() {
                    @Override
                    public Observable<QuerySideCustomer> produce() {
                        return Observable.just(BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                                baseUrl("/customers/" + customerId),
                                HttpMethod.GET,
                                QuerySideCustomer.class));
                    }
                },
                new Verifier<QuerySideCustomer>() {
                    @Override
                    public void verify(QuerySideCustomer customerResponse) {
                        Assert.assertEquals(customerId, customerResponse.getId());
                        assertTrue(customerResponse.getToAccounts().values().stream().anyMatch(t -> t.equals(toAccountInfo)));
                    }
                });
    }

}
