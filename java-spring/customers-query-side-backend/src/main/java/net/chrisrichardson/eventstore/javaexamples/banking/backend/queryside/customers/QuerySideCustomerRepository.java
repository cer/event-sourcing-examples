package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import net.chrisrichardson.eventstore.javaexamples.banking.common.customers.QuerySideCustomer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

interface QuerySideCustomerRepository extends MongoRepository<QuerySideCustomer, String> {

    List<QuerySideCustomer> findByEmailLike(String email);
}
