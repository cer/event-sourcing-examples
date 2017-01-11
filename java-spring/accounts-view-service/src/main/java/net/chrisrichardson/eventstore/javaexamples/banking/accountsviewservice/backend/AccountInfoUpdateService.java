package net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend;

import com.mongodb.WriteResult;
import io.eventuate.Int128;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountChangeInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.accounts.AccountTransactionInfo;
import net.chrisrichardson.eventstore.javaexamples.banking.common.transactions.TransferState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.math.BigDecimal;
import java.util.Date;

import static net.chrisrichardson.eventstore.javaexamples.banking.accountsviewservice.backend.MoneyUtil.toIntegerRepr;
import static org.springframework.data.mongodb.core.query.Criteria.where;

public class AccountInfoUpdateService {
  private Logger logger = LoggerFactory.getLogger(getClass());

  private AccountInfoRepository accountInfoRepository;
  private MongoTemplate mongoTemplate;

  public AccountInfoUpdateService(AccountInfoRepository accountInfoRepository, MongoTemplate mongoTemplate) {
    this.accountInfoRepository = accountInfoRepository;
    this.mongoTemplate = mongoTemplate;
  }


  public void create(String accountId, String customerId, String title, BigDecimal initialBalance, String description, Int128 version) {
    try {
      AccountChangeInfo ci = new AccountChangeInfo();
      ci.setAmount(toIntegerRepr(initialBalance));
      WriteResult x = mongoTemplate.upsert(new Query(where("id").is(accountId).and("version").exists(false)),
              new Update()
                      .set("customerId", customerId)
                      .set("title", title)
                      .set("description", description)
                      .set("balance", toIntegerRepr(initialBalance))
                      .push("changes", ci)
                      .set("creationDate", new Date(version.getHi()))
                      .set("version", version.asString()),
              AccountInfo.class);
      logger.info("Saved in mongo");

    } catch (DuplicateKeyException t) {
      logger.warn("When saving ", t);
    } catch (Throwable t) {
      logger.error("Error during saving: ", t);
      throw new RuntimeException(t);
    }
  }

  public void delete(String accountId) {
    accountInfoRepository.delete(accountId);
  }


  public void addTransaction(String accountId, AccountTransactionInfo ti) {
    mongoTemplate.upsert(new Query(where("id").is(accountId)),
            new Update().
                    set("transactions." + ti.getTransactionId(), ti),
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

  public void updateTransactionStatus(String accountId, String transactionId, TransferState status) {
      mongoTemplate.upsert(new Query(where("id").is(accountId)),
              new Update().
                      set("transactions." + transactionId + ".status", status),
              AccountInfo.class);
  }
}
