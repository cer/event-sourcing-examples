package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerService;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.AddToAccountResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import rx.Observable;

/**
 * Created by popikyardo on 03.02.16.
 */
@RestController
@RequestMapping("/customers")
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Observable<CustomerResponse> createCustomer(@Validated @RequestBody CustomerInfo customer) {
        return customerService.createCustomer(customer)
                .map(entityAndEventInfo -> new CustomerResponse(entityAndEventInfo.getEntityIdentifier().getId(), customer));
    }

    @RequestMapping(value = "/{id}/toaccounts", method = RequestMethod.POST)
    public Observable<AddToAccountResponse> addToAccount(@PathVariable String id, @Validated @RequestBody ToAccountInfo request) {
        return customerService.addToAccount(id, request)
                .map(entityAndEventInfo -> new AddToAccountResponse(entityAndEventInfo.entityVersion().asString()));
    }

}
