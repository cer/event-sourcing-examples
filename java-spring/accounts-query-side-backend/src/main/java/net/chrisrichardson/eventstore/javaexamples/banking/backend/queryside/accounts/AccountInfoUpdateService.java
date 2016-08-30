package net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts;

import com.mongodb.WriteResult;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountTransactionInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.math.BigDecimal;
import java.util.Collections;

import static net.chrisrichardson.eventstore.javaexamples.banking.backend.queryside.accounts.MoneyUtil.toIntegerRepr;
import static org.springframework.data.mongodb.core.query.Criteria.where;

public class AccountInfoUpdateService {
  private Logger logger = LoggerFactory.getLogger(getClass());

  private MongoTemplate mongoTemplate;

  public AccountInfoUpdateService(MongoTemplate mongoTemplate) {
    this.mongoTemplate = mongoTemplate;
  }


  public void create(String accountId, String customerId, String title, BigDecimal initialBalance, String description, String version) {
    try {
      WriteResult x = mongoTemplate.upsert(new Query(where("id").is(accountId).and("version").exists(false)),
              new Update()
                      .set("customerId", customerId)
                      .set("title", title)
                      .set("description", description)
                      .set("balance", toIntegerRepr(initialBalance))
                      .set("version", version),
              AccountInfo.class);
      logger.info("Saved in mongo");
    } catch (Throwable t) {
      logger.error("Error during saving: ", t);
      throw new RuntimeException(t);
    }
  }


  public void addTransaction(String eventId, String accountId, AccountTransactionInfo ti) {
    mongoTemplate.upsert(new Query(where("id").is(accountId)),
            new Update().
                    set("transactions." + eventId, ti),
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
