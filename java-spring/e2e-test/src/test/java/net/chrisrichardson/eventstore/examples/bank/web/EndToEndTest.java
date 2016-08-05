package net.chrisrichardson.eventstore.examples.bank.web;


import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.AccountTransactionInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
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
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;

import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils.generateCustomerInfo;
import static org.junit.Assert.assertTrue;

public class EndToEndTest {

  private String getenv(String name, String defaultValue) {
    String x = System.getenv(name);
    return x == null ? defaultValue : x;
  }

  private String makeBaseUrl(int port, String path) {
    return "http://" + getenv("SERVICE_HOST", "localhost") + ":" + port + "/" + path;
  }

  private String accountsCommandSideBaseUrl(String path) {
    return makeBaseUrl(8080, path);
  }
  private String accountsQuerySideBaseUrl(String path) {
    return makeBaseUrl(8081, path);
  }
  private String transactionsCommandSideBaseUrl(String path) {
    return makeBaseUrl(8082, path);
  }
  private String customersCommandSideBaseUrl(String path) {
    return makeBaseUrl(8083, path);
  }

  private String customersQuerySideBaseUrl(String path) {
    return makeBaseUrl(8084, path);
  }

  RestTemplate restTemplate = new RestTemplate();

  CustomersTestUtils customersTestUtils = new CustomersTestUtils(restTemplate, customersQuerySideBaseUrl("/customers/"));


  @Test
  public void shouldCreateCustomerAndAccountsAndTransferMoney() {
    CustomerInfo customerInfo = generateCustomerInfo();

    BigDecimal initialFromAccountBalance = new BigDecimal(500);
    BigDecimal initialToAccountBalance = new BigDecimal(100);
    BigDecimal amountToTransfer = new BigDecimal(150);

    BigDecimal finalFromAccountBalance = initialFromAccountBalance.subtract(amountToTransfer);
    BigDecimal finalToAccountBalance = initialToAccountBalance.add(amountToTransfer);

    final CustomerResponse customerResponse = restTemplate.postForEntity(customersCommandSideBaseUrl("/customers"),customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    customersTestUtils.assertCustomerResponse(customerId, customerInfo);


    final CreateAccountResponse fromAccount = BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            accountsCommandSideBaseUrl("/accounts"),
            HttpMethod.POST,
            CreateAccountResponse.class,
            new CreateAccountRequest(customerId, "My #1 Account", "", initialFromAccountBalance)
    );
    final String fromAccountId = fromAccount.getAccountId();

    CreateAccountResponse toAccount = BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            accountsCommandSideBaseUrl("/accounts"),
            HttpMethod.POST,
            CreateAccountResponse.class,
            new CreateAccountRequest(customerId, "My #2 Account", "", initialToAccountBalance)
    );

    String toAccountId = toAccount.getAccountId();

    Assert.assertNotNull(fromAccountId);
    Assert.assertNotNull(toAccountId);

    assertAccountBalance(fromAccountId, initialFromAccountBalance);
    assertAccountBalance(toAccountId, initialToAccountBalance);


    final CreateMoneyTransferResponse moneyTransfer =  BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            transactionsCommandSideBaseUrl("/transfers"),
            HttpMethod.POST,
            CreateMoneyTransferResponse.class,
            new CreateMoneyTransferRequest(fromAccountId, toAccountId, amountToTransfer, "")
    );

    assertAccountBalance(fromAccountId, finalFromAccountBalance);
    assertAccountBalance(toAccountId, finalToAccountBalance);

    // TOOD - check state of money transfer

    List<AccountTransactionInfo> transactionInfoList = restTemplate.exchange(accountsQuerySideBaseUrl("/accounts/"+fromAccountId+"/history"),
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

    final CustomerResponse customerResponse = restTemplate.postForEntity(customersCommandSideBaseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    Assert.assertNotNull(customerId);
    Assert.assertEquals(customerInfo, customerResponse.getCustomerInfo());

    customersTestUtils.assertCustomerResponse(customerId, customerInfo);

    final CreateAccountResponse account = BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
            accountsCommandSideBaseUrl("/accounts"),
            HttpMethod.POST,
            CreateAccountResponse.class,
            new CreateAccountRequest(customerId, "My 1 Account", "", initialFromAccountBalance)
    );
    final String accountId = account.getAccountId();

    Assert.assertNotNull(accountId);

    assertAccountBalance(accountId, initialFromAccountBalance);

    List<GetAccountResponse> accountResponseList = restTemplate.exchange(accountsQuerySideBaseUrl("/accounts?customerId="+customerId),
            HttpMethod.GET,
            new HttpEntity(BasicAuthUtils.basicAuthHeaders("test_user@mail.com")),
            new ParameterizedTypeReference<List<GetAccountResponse>>() {}).getBody();

    assertTrue(accountResponseList.stream().filter(acc -> acc.getAccountId().equals(accountId)).findFirst().isPresent());
  }

  private BigDecimal toCents(BigDecimal dollarAmount) {
    return dollarAmount.multiply(new BigDecimal(100));
  }

  private void assertAccountBalance(final String fromAccountId, final BigDecimal expectedBalanceInDollars) {
    final BigDecimal inCents = toCents(expectedBalanceInDollars);
    eventually(
            new Producer<GetAccountResponse>() {
              @Override
              public CompletableFuture<GetAccountResponse> produce() {
                  return CompletableFuture.completedFuture(BasicAuthUtils.doBasicAuthenticatedRequest(restTemplate,
                          accountsQuerySideBaseUrl("/accounts/" + fromAccountId),
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

}
