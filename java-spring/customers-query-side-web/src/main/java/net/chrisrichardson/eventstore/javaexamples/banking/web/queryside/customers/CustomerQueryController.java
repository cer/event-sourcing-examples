package net.chrisrichardson.eventstore.javaexamples.banking.web.queryside.customers;

import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers.CustomerInfoWithId;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers.CustomerNotFoundException;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers.CustomerQueryService;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers.CustomersNotFoundException;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rx.Observable;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Main on 05.02.2016.
 */
@RestController
public class CustomerQueryController {

    private CustomerQueryService customerQueryService;

    @Autowired
    public CustomerQueryController(CustomerQueryService customerQueryService) {
        this.customerQueryService = customerQueryService;
    }

    @RequestMapping(value="/customers/{customerId}", method = RequestMethod.GET)
    public Observable<CustomerResponse> getCustomer(@PathVariable String customerId) {
        return customerQueryService.findByCustomerId(new EntityIdentifier(customerId))
                .map(this::getCustomerResponse);
    }

    @RequestMapping(value="/customers", method = RequestMethod.GET)
    public Observable<CustomersQueryResponse> getCustomersByEmail(@RequestParam String email) {
        return customerQueryService.findByEmail(email)
                .map(this::getCustomersQueryResponse);
    }

    @ResponseStatus(value= HttpStatus.NOT_FOUND, reason="customer not found")
    @ExceptionHandler(CustomerNotFoundException.class)
    public void customerNotFound() {

    }

    @ResponseStatus(value= HttpStatus.NOT_FOUND, reason="customers not found")
    @ExceptionHandler(CustomersNotFoundException.class)
    public void customersNotFound() {

    }

    private CustomerResponse getCustomerResponse(CustomerInfoWithId customerInfoWithId) {
        return new CustomerResponse(customerInfoWithId.getId(), new CustomerInfo(customerInfoWithId.getEmail(),
                customerInfoWithId.getSsn(),
                customerInfoWithId.getPhoneNumber(),
                customerInfoWithId.getAddress()));
    }

    private CustomersQueryResponse getCustomersQueryResponse(List<CustomerInfoWithId> customersList) {
        return new CustomersQueryResponse(customersList
                .stream()
                .map(this::getCustomerResponse)
                .collect(Collectors.toList())
        );
    }
}
