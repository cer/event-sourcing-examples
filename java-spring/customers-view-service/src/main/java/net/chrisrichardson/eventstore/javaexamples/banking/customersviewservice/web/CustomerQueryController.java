package net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.web;

import net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.backend.CustomerQueryService;
import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.CompletableFuture;

/**
 * Created by Main on 05.02.2016.
 */
@RestController
@RequestMapping("/api")
public class CustomerQueryController {

  private CustomerQueryService customerQueryService;

  @Autowired
  public CustomerQueryController(CustomerQueryService customerQueryService) {
    this.customerQueryService = customerQueryService;
  }

  @RequestMapping(value = "/customers/{customerId}", method = RequestMethod.GET)
  public CompletableFuture<QuerySideCustomer> getCustomer(@PathVariable String customerId) {
    return customerQueryService.findByCustomerId(customerId);
  }

  @RequestMapping(value = "/customers", method = RequestMethod.GET)
  public CompletableFuture<CustomersQueryResponse> getCustomersByEmail(@RequestParam String email) {
    return customerQueryService.findByEmail(email)
            .thenApply(this::getCustomersQueryResponse);
  }


  @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "customers not found")
  @ExceptionHandler(EmptyResultDataAccessException.class)
  public void customersNotFound() {

  }

  private CustomersQueryResponse getCustomersQueryResponse(List<QuerySideCustomer> customersList) {
    return new CustomersQueryResponse(customersList);
  }
}
