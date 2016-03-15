package net.chrisrichardson.eventstore.examples.bank.web;


import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.commonauth.utils.BasicAuthUtils;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CreateAccountRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CreateAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CreateMoneyTransferRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CreateMoneyTransferResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.accounts.GetAccountResponse;
import net.chrisrichardson.eventstore.json.EventStoreCommonObjectMapping;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.http.HttpMethod;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import rx.Observable;

import java.math.BigDecimal;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.customers.CustomersTestUtils.generateCustomerInfo;

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

  CustomersTestUtils customersTestUtils;

  {

  for (HttpMessageConverter<?> mc : restTemplate.getMessageConverters()) {
    if (mc instanceof MappingJackson2HttpMessageConverter) {
      ((MappingJackson2HttpMessageConverter) mc).setObjectMapper(EventStoreCommonObjectMapping.getObjectMapper());
    }
  }

    customersTestUtils = new CustomersTestUtils(restTemplate, customersQuerySideBaseUrl("/customers/"));
  }


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
            new CreateMoneyTransferRequest(fromAccountId, toAccountId, amountToTransfer)
    );

    assertAccountBalance(fromAccountId, finalFromAccountBalance);
    assertAccountBalance(toAccountId, finalToAccountBalance);

    // TOOD - check state of money transfer
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
