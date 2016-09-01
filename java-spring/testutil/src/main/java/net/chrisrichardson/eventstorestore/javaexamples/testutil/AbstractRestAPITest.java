package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountTransactionInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.CreateAccountRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.CreateAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.GetAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.CreateMoneyTransferRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.CreateMoneyTransferResponse;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateCustomerInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateToAccountInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public abstract class AbstractRestAPITest {

  @Test
  public void shouldCreateAccountsAndTransferMoney() {
    BigDecimal initialFromAccountBalance = new BigDecimal(500);
    BigDecimal initialToAccountBalance = new BigDecimal(100);
    BigDecimal amountToTransfer = new BigDecimal(150);

    BigDecimal finalFromAccountBalance = initialFromAccountBalance.subtract(amountToTransfer);
    BigDecimal finalToAccountBalance = initialToAccountBalance.add(amountToTransfer);

    final CreateAccountResponse fromAccount = getAuthenticatedRestTemplate().postForEntity(baseUrl("/accounts"),
            new CreateAccountRequest("00000000-00000000", "My 1 Account", "", initialFromAccountBalance),
            CreateAccountResponse.class);

    final String fromAccountId = fromAccount.getAccountId();

    CreateAccountResponse toAccount = getAuthenticatedRestTemplate().postForEntity(baseUrl("/accounts"),
            new CreateAccountRequest("00000000-00000000", "My 2 Account", "", initialToAccountBalance),
            CreateAccountResponse.class);

    String toAccountId = toAccount.getAccountId();

    Assert.assertNotNull(fromAccountId);
    Assert.assertNotNull(toAccountId);

    try {
      Thread.sleep(10000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    assertAccountBalance(fromAccountId, initialFromAccountBalance);
    assertAccountBalance(toAccountId, initialToAccountBalance);

    final CreateMoneyTransferResponse moneyTransfer = getAuthenticatedRestTemplate().postForEntity(baseUrl("/transfers"),
            new CreateMoneyTransferRequest(fromAccountId, toAccountId, amountToTransfer, ""),
            CreateMoneyTransferResponse.class);

    assertAccountBalance(fromAccountId, finalFromAccountBalance);
    assertAccountBalance(toAccountId, finalToAccountBalance);

    eventually(
            new Producer<AccountTransactionInfo[]>() {
              @Override
              public CompletableFuture<AccountTransactionInfo[]> produce() {
                return CompletableFuture.completedFuture(getAuthenticatedRestTemplate().getForEntity(baseUrl("/accounts/" + fromAccountId + "/history"),
                        AccountTransactionInfo[].class));
              }
            },
            new Verifier<AccountTransactionInfo[]>() {
              @Override
              public void verify(AccountTransactionInfo[] transactionInfos) {
                Optional<AccountTransactionInfo> first = Arrays.asList(transactionInfos).stream().filter(ti -> ti.getTransactionId().equals(moneyTransfer.getMoneyTransferId())).findFirst();

                assertTrue(first.isPresent());

                AccountTransactionInfo ti = first.get();

                assertEquals(fromAccountId, ti.getFromAccountId());
                assertEquals(toAccountId, ti.getToAccountId());
                assertEquals(toAccountId, ti.getToAccountId());
                assertEquals(fromAccountId, ti.getFromAccountId());
                assertEquals(toCents(amountToTransfer).longValue(), ti.getAmount());
              }
            });
  }

  @Test
  public void shouldCreateAccountsAndGetByCustomer() {
    BigDecimal initialFromAccountBalance = new BigDecimal(500);
    CustomerInfo customerInfo = generateCustomerInfo();

    final CustomerResponse customerResponse = getRestTemplate().postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    Assert.assertNotNull(customerId);
    assertEquals(customerInfo, customerResponse.getCustomerInfo());

    try {
      Thread.sleep(10000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    getCustomersTestUtils().assertCustomerResponse(customerId, customerInfo);

    final CreateAccountResponse account = getAuthenticatedRestTemplate().postForEntity(baseUrl("/accounts"),
            new CreateAccountRequest(customerId, "My 1 Account", "", initialFromAccountBalance),
            CreateAccountResponse.class);

    final String accountId = account.getAccountId();

    Assert.assertNotNull(accountId);

    assertAccountBalance(accountId, initialFromAccountBalance);

    eventually(
            new Producer<GetAccountResponse[]>() {
              @Override
              public CompletableFuture<GetAccountResponse[]> produce() {
                return CompletableFuture.completedFuture(getAuthenticatedRestTemplate().getForEntity(baseUrl("/accounts?customerId=" + customerId),
                        GetAccountResponse[].class));
              }
            },
            new Verifier<GetAccountResponse[]>() {
              @Override
              public void verify(GetAccountResponse[] accountResponses) {
                assertTrue(Arrays.asList(accountResponses).stream().filter(acc -> acc.getAccountId().equals(accountId)).findFirst().isPresent());
              }
            });
  }

  @Test
  public void shouldCreateCustomersAndAddToAccount() {
    CustomerInfo customerInfo = generateCustomerInfo();

    final CustomerResponse customerResponse = getRestTemplate().postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    Assert.assertNotNull(customerId);
    assertEquals(customerInfo, customerResponse.getCustomerInfo());

    getCustomersTestUtils().assertCustomerResponse(customerId, customerInfo);

    ToAccountInfo toAccountInfo = generateToAccountInfo();

    getAuthenticatedRestTemplate().postForEntity(baseUrl("/customers/" + customerId + "/toaccounts"),
            toAccountInfo,
            null);

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
              public CompletableFuture<GetAccountResponse> produce() {
                return CompletableFuture.completedFuture(getAuthenticatedRestTemplate().getForEntity(baseUrl("/accounts/" + fromAccountId),
                        GetAccountResponse.class));
              }
            },
            new Verifier<GetAccountResponse>() {
              @Override
              public void verify(GetAccountResponse accountInfo) {
                assertEquals(fromAccountId, accountInfo.getAccountId());
                assertEquals(inCents, accountInfo.getBalance());
              }
            });
  }

  private void assertToAccountsContains(final String customerId, final ToAccountInfo toAccountInfo) {
    eventually(
            new Producer<QuerySideCustomer>() {
              @Override
              public CompletableFuture<QuerySideCustomer> produce() {
                return CompletableFuture.completedFuture(getAuthenticatedRestTemplate().getForEntity(baseUrl("/customers/" + customerId),
                        QuerySideCustomer.class));
              }
            },
            new Verifier<QuerySideCustomer>() {
              @Override
              public void verify(QuerySideCustomer customerResponse) {
                assertEquals(customerId, customerResponse.getId());
                assertTrue(customerResponse.getToAccounts().values().stream().anyMatch(t -> t.equals(toAccountInfo)));
              }
            });
  }

  public abstract AuthenticatedRestTemplate getAuthenticatedRestTemplate();

  public abstract RestTemplate getRestTemplate();

  public abstract String baseUrl(String path);

  public abstract CustomersTestUtils getCustomersTestUtils();
}
