package net.chrisrichardson.eventstore.javaexamples.banking.customersservice.web;

import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.DeleteAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.AddToAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.customersservice.backend.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

  private CustomerService customerService;

  @Autowired
  public CustomerController(CustomerService customerService) {
    this.customerService = customerService;
  }

  @RequestMapping(method = RequestMethod.POST)
  public CompletableFuture<CustomerResponse> createCustomer(@Validated @RequestBody CustomerInfo customer) {
    return customerService.createCustomer(customer)
            .thenApply(entityAndEventInfo -> new CustomerResponse(entityAndEventInfo.getEntityId(), customer));
  }

  @RequestMapping(value = "/{id}/toaccounts", method = RequestMethod.POST)
  public CompletableFuture<AddToAccountResponse> addToAccount(@PathVariable String id, @Validated @RequestBody ToAccountInfo request) {
    return customerService.addToAccount(id, request)
            .thenApply(entityAndEventInfo -> new AddToAccountResponse(entityAndEventInfo.getEntityVersion().toString()));
  }

  @RequestMapping(value = "/{customerId}/toaccounts/{accountId}", method = RequestMethod.DELETE)
  public CompletableFuture<DeleteAccountResponse> deleteToAccount(@PathVariable String customerId, @PathVariable String accountId) {
    return customerService.deleteToAccount(customerId, accountId)
            .thenApply(entityAndEventInfo -> new DeleteAccountResponse(accountId));
  }

}
