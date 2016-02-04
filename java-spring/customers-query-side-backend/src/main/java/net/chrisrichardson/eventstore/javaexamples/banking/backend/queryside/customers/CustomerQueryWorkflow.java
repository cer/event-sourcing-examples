package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.backend.common.customers.CustomerCreatedEvent;
import net.chrisrichardson.eventstore.subscriptions.CompoundEventHandler;
import net.chrisrichardson.eventstore.subscriptions.DispatchedEvent;
import net.chrisrichardson.eventstore.subscriptions.EventHandlerMethod;
import net.chrisrichardson.eventstore.subscriptions.EventSubscriber;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import rx.Observable;

/**
 * Created by Main on 04.02.2016.
 */
@EventSubscriber(id="querySideEventHandlers")
public class CustomerQueryWorkflow implements CompoundEventHandler {

    private Logger logger = LoggerFactory.getLogger(getClass());

    private CustomerInfoUpdateService customerInfoUpdateService;


    public CustomerQueryWorkflow(CustomerInfoUpdateService customerInfoUpdateService) {
        this.customerInfoUpdateService = customerInfoUpdateService;
    }

    @EventHandlerMethod
    public Observable<Object> create(DispatchedEvent<CustomerCreatedEvent> de) {
        CustomerCreatedEvent event = de.event();
        String id = de.getEntityIdentifier().getId();
        String eventId = de.eventId().asString();
        logger.info("**************** customer version=" + id + ", " + eventId);

        customerInfoUpdateService.create(id, event.getCustomerInfo());
        return Observable.just(null);
    }
}
