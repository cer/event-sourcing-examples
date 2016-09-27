package net.chrisrichardson.eventstorestore.javaexamples.testutil;

import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.*;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.*;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.CreateMoneyTransferRequest;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.CreateMoneyTransferResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateCustomerInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.CustomersTestUtils.generateToAccountInfo;
import static net.chrisrichardson.eventstorestore.javaexamples.testutil.TestUtil.eventually;
import static org.junit.Assert.*;

public abstract class AbstractRestAPITest {

  @Test
  public void shouldCreateAccountsAndTransferMoney() {
    CustomerInfo customerInfo = generateCustomerInfo();
    AuthenticatedRestTemplate authenticatedRestTemplate = getAuthenticatedRestTemplate(customerInfo.getUserCredentials());

    final CustomerResponse customerResponse = getRestTemplate().postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    getCustomersTestUtils().assertCustomerResponse(customerId, customerInfo);

    BigDecimal initialFromAccountBalance = new BigDecimal(500);
    BigDecimal initialToAccountBalance = new BigDecimal(100);
    BigDecimal amountToTransfer = new BigDecimal(150);

    BigDecimal finalFromAccountBalance = initialFromAccountBalance.subtract(amountToTransfer);
    BigDecimal finalToAccountBalance = initialToAccountBalance.add(amountToTransfer);

    final CreateAccountResponse fromAccount = authenticatedRestTemplate.postForEntity(baseUrl("/accounts"),
            new CreateAccountRequest(customerId, "My 1 Account", "", initialFromAccountBalance),
            CreateAccountResponse.class);

    final String fromAccountId = fromAccount.getAccountId();

    CreateAccountResponse toAccount = authenticatedRestTemplate.postForEntity(baseUrl("/accounts"),
            new CreateAccountRequest(customerId, "My 2 Account", "", initialToAccountBalance),
            CreateAccountResponse.class);

    String toAccountId = toAccount.getAccountId();

    Assert.assertNotNull(fromAccountId);
    Assert.assertNotNull(toAccountId);

    assertAccountBalance(authenticatedRestTemplate, fromAccountId, initialFromAccountBalance);
    assertAccountBalance(authenticatedRestTemplate, toAccountId, initialToAccountBalance);

    final CreateMoneyTransferResponse moneyTransfer = authenticatedRestTemplate.postForEntity(baseUrl("/transfers"),
            new CreateMoneyTransferRequest(fromAccountId, toAccountId, amountToTransfer, ""),
            CreateMoneyTransferResponse.class);

    assertAccountBalance(authenticatedRestTemplate, fromAccountId, finalFromAccountBalance);
    assertAccountBalance(authenticatedRestTemplate, toAccountId, finalToAccountBalance);

    eventually(
            () -> CompletableFuture.completedFuture(authenticatedRestTemplate.getForEntity(baseUrl("/accounts/" + fromAccountId + "/history"),
                    AccountHistoryResponse.class)),
            accountHistoryResponse -> {
              Optional<AccountHistoryEntry> first = accountHistoryResponse.getTransactionsHistory().stream().filter(ahe -> ahe.getEntryType() == AccountHistoryEntry.EntryType.transaction && ((AccountTransactionInfo) ahe).getTransactionId().equals(moneyTransfer.getMoneyTransferId())).findFirst();

              assertTrue(first.isPresent());

              AccountTransactionInfo ti = (AccountTransactionInfo) first.get();

              assertEquals(fromAccountId, ti.getFromAccountId());
              assertEquals(toAccountId, ti.getToAccountId());
              assertEquals(toAccountId, ti.getToAccountId());
              assertEquals(fromAccountId, ti.getFromAccountId());
              assertEquals(toCents(amountToTransfer).longValue(), ti.getAmount());
            });
  }

  @Test
  public void shouldCreateAndDeleteAccountsAndGetByCustomer() {
    BigDecimal initialFromAccountBalance = new BigDecimal(500);
    CustomerInfo customerInfo = generateCustomerInfo();
    AuthenticatedRestTemplate authenticatedRestTemplate = getAuthenticatedRestTemplate(customerInfo.getUserCredentials());

    final CustomerResponse customerResponse = getRestTemplate().postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    Assert.assertNotNull(customerId);
    assertEquals(customerInfo, customerResponse.getCustomerInfo());

    getCustomersTestUtils().assertCustomerResponse(customerId, customerInfo);

    final CreateAccountResponse account = authenticatedRestTemplate.postForEntity(baseUrl("/accounts"),
            new CreateAccountRequest(customerId, "My 1 Account", "", initialFromAccountBalance),
            CreateAccountResponse.class);

    final String accountId = account.getAccountId();

    Assert.assertNotNull(accountId);

    assertAccountBalance(authenticatedRestTemplate, accountId, initialFromAccountBalance);

    eventually(
            () -> CompletableFuture.completedFuture(authenticatedRestTemplate.getForEntity(baseUrl("/customers/" + customerId + "/accounts"),
                    GetAccountsResponse.class)),
            accountResponses -> assertTrue(accountResponses.getAccounts().stream().filter(acc -> acc.getAccountId().equals(accountId)).findFirst().isPresent()));

    authenticatedRestTemplate.deleteEntity(baseUrl("/accounts/" + accountId),
            DeleteAccountResponse.class);

    eventually(
            () -> CompletableFuture.completedFuture(authenticatedRestTemplate.getForEntity(baseUrl("/customers/" + customerId + "/accounts"),
                    GetAccountsResponse.class)),
            accountResponses -> assertFalse(accountResponses.getAccounts().stream().filter(acc -> acc.getAccountId().equals(accountId)).findFirst().isPresent()));
  }

  @Test
  public void shouldCreateCustomersAndAddToAccount() {
    CustomerInfo customerInfo = generateCustomerInfo();
    AuthenticatedRestTemplate authenticatedRestTemplate = getAuthenticatedRestTemplate(customerInfo.getUserCredentials());

    final CustomerResponse customerResponse = getRestTemplate().postForEntity(baseUrl("/customers"), customerInfo, CustomerResponse.class).getBody();
    final String customerId = customerResponse.getId();

    Assert.assertNotNull(customerId);
    assertEquals(customerInfo, customerResponse.getCustomerInfo());

    getCustomersTestUtils().assertCustomerResponse(customerId, customerInfo);

    ToAccountInfo toAccountInfo = generateToAccountInfo();

    authenticatedRestTemplate.postForEntity(baseUrl("/customers/" + customerId + "/toaccounts"),
            toAccountInfo,
            null);

    assertToAccountsContains(customerId, authenticatedRestTemplate, toAccountInfo);
  }

  private BigDecimal toCents(BigDecimal dollarAmount) {
    return dollarAmount.multiply(new BigDecimal(100));
  }

  private void assertAccountBalance(AuthenticatedRestTemplate authenticatedRestTemplate, final String fromAccountId, final BigDecimal expectedBalanceInDollars) {
    final BigDecimal inCents = toCents(expectedBalanceInDollars);
    eventually(
            () -> CompletableFuture.completedFuture(authenticatedRestTemplate.getForEntity(baseUrl("/accounts/" + fromAccountId),
                    GetAccountResponse.class)),
            accountInfo -> {
              assertEquals(fromAccountId, accountInfo.getAccountId());
              assertEquals(inCents, accountInfo.getBalance());
            });
  }

  private void assertToAccountsContains(final String customerId, AuthenticatedRestTemplate authenticatedRestTemplate, final ToAccountInfo toAccountInfo) {
    eventually(
            () -> CompletableFuture.completedFuture(authenticatedRestTemplate.getForEntity(baseUrl("/customers/" + customerId),
                    QuerySideCustomer.class)),
            customerResponse -> {
              assertEquals(customerId, customerResponse.getId());
              assertTrue(customerResponse.getToAccounts().values().stream().anyMatch(t -> t.equals(toAccountInfo)));
            });
  }

  public AuthenticatedRestTemplate getAuthenticatedRestTemplate(UserCredentials userCredentials) {
    return new AuthenticatedRestTemplate(getRestTemplate(), userCredentials);
  }

  public abstract RestTemplate getRestTemplate();

  public abstract String baseUrl(String path);

  public abstract CustomersTestUtils getCustomersTestUtils();
}
