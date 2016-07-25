package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import io.eventuate.DispatchedEvent;
import io.eventuate.EventHandlerMethod;
import io.eventuate.EventSubscriber;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerAddedToAccount;
import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerCreatedEvent;
import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.ToAccountInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by Main on 04.02.2016.
 */
@EventSubscriber(id = "customerQuerySideEventHandlers")
public class CustomerQueryWorkflow {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private CustomerInfoUpdateService customerInfoUpdateService;


    public CustomerQueryWorkflow(CustomerInfoUpdateService customerInfoUpdateService) {
        this.customerInfoUpdateService = customerInfoUpdateService;
    }

    @EventHandlerMethod
    public void create(DispatchedEvent<CustomerCreatedEvent> de) {
        CustomerCreatedEvent event = de.getEvent();
        String id = de.getEntityId();

        customerInfoUpdateService.create(id, event.getCustomerInfo());
    }

    @EventHandlerMethod
    public void addToAccount(DispatchedEvent<CustomerAddedToAccount> de) {
        CustomerAddedToAccount event = de.getEvent();
        String id = de.getEntityId();

        ToAccountInfo toAccountInfo = event.getToAccountInfo();

        customerInfoUpdateService.addToAccount(id, toAccountInfo);
    }

}
