package net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside;

import net.chrisrichardson.eventstore.EntityIdentifier;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers.CustomerQueryService;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rx.Observable;

import java.util.List;

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

    @RequestMapping(value = "/customers/{customerId}", method = RequestMethod.GET)
    public Observable<QuerySideCustomer> getCustomer(@PathVariable String customerId) {
        return customerQueryService.findByCustomerId(new EntityIdentifier(customerId));
    }

    @RequestMapping(value = "/customers", method = RequestMethod.GET)
    public Observable<CustomersQueryResponse> getCustomersByEmail(@RequestParam String email) {
        return customerQueryService.findByEmail(email)
                .map(this::getCustomersQueryResponse);
    }


    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "customers not found")
    @ExceptionHandler(EmptyResultDataAccessException.class)
    public void customersNotFound() {

    }

    private CustomersQueryResponse getCustomersQueryResponse(List<QuerySideCustomer> customersList) {
        return new CustomersQueryResponse(customersList);
    }
}
