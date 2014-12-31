package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import com.mongodb.WriteResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.math.BigDecimal;
import java.util.Collections;

import static net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.MoneyUtil.toIntegerRepr;
import static org.springframework.data.mongodb.core.query.Criteria.where;

public class AccountInfoUpdateService  {
  private Logger logger = LoggerFactory.getLogger(getClass());

  private AccountInfoRepository accountInfoRepository;
  private MongoTemplate mongoTemplate;

  public AccountInfoUpdateService(AccountInfoRepository accountInfoRepository, MongoTemplate mongoTemplate) {
    this.accountInfoRepository = accountInfoRepository;
    this.mongoTemplate = mongoTemplate;
  }



  public void create(String accountId, BigDecimal initialBalance, String version) {
    try {
      accountInfoRepository.save(new AccountInfo(
              accountId,
              toIntegerRepr(initialBalance),
              Collections.<AccountChangeInfo>emptyList(),
              Collections.<AccountTransactionInfo>emptyList(),
              version));
      logger.info("Saved in mongo");
    } catch (Throwable t) {
      logger.error("Error during saving: ");
      logger.error("Error during saving: ", t);
      throw new RuntimeException(t);
    }
  }


  public void addTransaction(String eventId, String fromAccountId, AccountTransactionInfo ti) {
    mongoTemplate.updateMulti(new Query(where("id").is(fromAccountId).and("version").lt(eventId)),
            new Update().
                    push("transactions", ti).
                    set("version", eventId),
            AccountInfo.class);
  }


  public void updateBalance(String accountId, String changeId, long balanceDelta, AccountChangeInfo ci) {
    WriteResult x = mongoTemplate.updateMulti(new Query(where("id").is(accountId).and("version").lt(changeId)),
            new Update().
                    inc("balance", balanceDelta).
                    push("changes", ci).
                    set("version", changeId),
            AccountInfo.class);
  }


}
