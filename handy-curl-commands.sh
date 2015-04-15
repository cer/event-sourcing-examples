#! /bin/bash -e


# Create account 1

account1=$(curl -v --data '{"initialBalance" : 500}' -H "content-type: application/json" http://localhost:8080/accounts)

# {"accountId":"0000014ae4caf314-ae7453bbb71e0000"}

curl -v http://localhost:8081/accounts/0000014ae4caf314-ae7453bbb71e0000

# {"accountId":"0000014ae4caf314-ae7453bbb71e0000","balance":50000}

# Create account 2

account2=$(curl -v --data '{"initialBalance" : 300}' -H "content-type: application/json" http://localhost:8080/accounts)

# {"accountId":"0000014ae4cc8415-ae7453bbb71e0000"}

curl -v http://localhost:8081/accounts/0000014ae4cc8415-ae7453bbb71e0000

#


transfer=$(curl -v --data '{"amount" : 150, "fromAccountId" : "0000014ae4caf314-ae7453bbb71e0000", "toAccountId" : "0000014ae4cc8415-ae7453bbb71e0000"}' -H "content-type: application/json" http://localhost:8082/transfers)

# {"moneyTransferId":"0000014ae4cef030-ae7453bbb71e0000"}









