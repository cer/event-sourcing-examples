package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.customers;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

interface CustomerInfoRepository extends MongoRepository<CustomerInfoWithId, String> {

    List<CustomerInfoWithId> findByEmailLike(String email);
}
