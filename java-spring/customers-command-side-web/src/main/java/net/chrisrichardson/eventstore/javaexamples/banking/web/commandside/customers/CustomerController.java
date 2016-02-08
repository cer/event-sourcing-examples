package net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.commandside.customers.CustomerService;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import rx.Observable;

/**
 * Created by popikyardo on 03.02.16.
 */
@RestController
@RequestMapping("/customer")
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Observable<CustomerResponse> createCustomer(@Validated @RequestBody CustomerInfo request) {
        return customerService.createCustomer(request)
                .map(entityAndEventInfo -> new CustomerResponse(entityAndEventInfo.getEntityIdentifier().getId(), request));
    }

    @RequestMapping(value = "/{id}/toaccounts", method = RequestMethod.POST)
    public Observable<ResponseEntity<?>> addToAccount(@PathVariable String id, @Validated @RequestBody ToAccountsRequest request) {
        return customerService.addToAccount(id, request.getId(), request.getTitle(), request.getOwner())
                .map(entityAndEventInfo -> ResponseEntity.ok().build());
    }

}
