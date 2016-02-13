#! /bin/bash -e

# Create a customer

customer=$(curl -v --data '{
  "address": {
    "city": "Oakland",
    "state": "CA",
    "street1": "1 High Street",
    "zipCode": "12345"
  },
  "email": "foo@bar.com",
  "name": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "phoneNumber": "415551212",
  "ssn": "123-45-6789"
}' -H "content-type: application/json" http://${DOCKER_HOST_IP?}:8083/customers)

customerId=$(echo $customer | jq -r .id)

echo customerId=$customerId

# Create account 1

account1=$(curl -v --data "{\"initialBalance\" : 500, \"customerId\" : \"$customerId\"}" -H "content-type: application/json" http://${DOCKER_HOST_IP?}:8080/accounts)

accountId1=$(echo $account1 | jq -r ".accountId")

curl -v http://${DOCKER_HOST_IP?}:8081/accounts/$accountId1

echo accountId1=$accountId1

# Create account 2

account2=$(curl -v --data "{\"initialBalance\" : 300, \"customerId\" : \"$customerId\"}" -H "content-type: application/json" http://${DOCKER_HOST_IP?}:8080/accounts)

accountId2=$(echo $account2 | jq -r ".accountId")


curl -v http://${DOCKER_HOST_IP?}:8081/accounts/$accountId2

echo accountId2=$accountId2

#


transfer=$(curl -v --data "{\"amount\" : 150,
   \"fromAccountId\" : \"$accountId1\", \"toAccountId\" : \"$accountId2\"
 }" -H "content-type: application/json" http://${DOCKER_HOST_IP?}:8082/transfers)

 echo transfer=$transfer

 
