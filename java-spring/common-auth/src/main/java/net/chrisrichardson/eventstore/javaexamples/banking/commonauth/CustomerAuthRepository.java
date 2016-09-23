package net.chrisrichardson.eventstore.javaexamples.banking.commonauth;

import net.chrisrichardson.eventstore.javaexamples.banking.web.customers.queryside.common.QuerySideCustomer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

interface CustomerAuthRepository extends MongoRepository<QuerySideCustomer, String> {

  List<QuerySideCustomer> findByEmail(String email);

  List<QuerySideCustomer> findByEmailAndPassword(String email, String password);
}