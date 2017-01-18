package net.chrisrichardson.eventstore.javaexamples.banking.customersviewservice.backend;

import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

interface CustomerViewRepository extends MongoRepository<QuerySideCustomer, String> {

  List<QuerySideCustomer> findByEmailLike(String email);
}
