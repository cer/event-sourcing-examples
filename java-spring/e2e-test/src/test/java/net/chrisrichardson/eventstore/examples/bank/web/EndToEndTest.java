package net.chrisrichardson.eventstore.examples.bank.web;


import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CreateAccountRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.accounts.CreateAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CreateMoneyTransferRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.transactions.CreateMoneyTransferResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.accounts.GetAccountResponse;
import net.chrisrichardson.eventstore.json.EventStoreCommonObjectMapping;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Producer;
import net.chrisrichardson.eventstorestore.javaexamples.testutil.Verifier;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import rx.Observable;

import java.math.BigDecimal;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;

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

  RestTemplate restTemplate = new RestTemplate();

  {

  for (HttpMessageConverter<?> mc : restTemplate.getMessageConverters()) {
    if (mc instanceof MappingJackson2HttpMessageConverter) {
      ((MappingJackson2HttpMessageConverter) mc).setObjectMapper(EventStoreCommonObjectMapping.getObjectMapper());
    }
  }
  }


  @Test
  public void shouldCreateAccountsAndTransferMoney() {

    BigDecimal initialFromAccountBalance = new BigDecimal(500);
    BigDecimal initialToAccountBalance = new BigDecimal(100);
    BigDecimal amountToTransfer = new BigDecimal(150);

    BigDecimal finalFromAccountBalance = initialFromAccountBalance.subtract(amountToTransfer);
    BigDecimal finalToAccountBalance = initialToAccountBalance.add(amountToTransfer);

    final CreateAccountResponse fromAccount = restTemplate.postForEntity(accountsCommandSideBaseUrl("/accounts"), new CreateAccountRequest(initialFromAccountBalance), CreateAccountResponse.class).getBody();
    final String fromAccountId = fromAccount.getAccountId();

    CreateAccountResponse toAccount = restTemplate.postForEntity(accountsCommandSideBaseUrl("/accounts"), new CreateAccountRequest(initialToAccountBalance), CreateAccountResponse.class).getBody();
    String toAccountId = toAccount.getAccountId();

    Assert.assertNotNull(fromAccountId);
    Assert.assertNotNull(toAccountId);

    assertAccountBalance(fromAccountId, initialFromAccountBalance);
    assertAccountBalance(toAccountId, initialToAccountBalance);


    final CreateMoneyTransferResponse moneyTransfer = restTemplate.postForEntity(transactionsCommandSideBaseUrl("/transfers"),
            new CreateMoneyTransferRequest(fromAccountId, toAccountId, amountToTransfer), CreateMoneyTransferResponse.class).getBody();

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
                return Observable.just(restTemplate.getForEntity(accountsQuerySideBaseUrl("/accounts/" + fromAccountId), GetAccountResponse.class).getBody());
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
