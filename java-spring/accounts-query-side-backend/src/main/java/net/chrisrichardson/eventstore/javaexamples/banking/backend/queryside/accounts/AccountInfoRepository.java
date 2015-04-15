package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import org.springframework.data.mongodb.repository.MongoRepository;

interface AccountInfoRepository extends MongoRepository<AccountInfo, String> {
}
