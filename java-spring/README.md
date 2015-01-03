This is the Java/Spring version of the Event Sourcing/CQRS money transfer example application.

This application consists of three microservices:

  * Account Service - the command side business logic for Accounts
  * Money Transfer Service - the command side business logic for Money Transfers
  * Query service - query side implementation of a MongoDB-based, denormalized view of Accounts and MoneyTransfers
   
The Account Service consists of the following modules:

  * commandside-backend-accounts - the Account aggregate
  * commandside-web-accounts - a REST API for creating and retrieving Accounts
 
The Money Transfer Service consists of the following modules:

  * commandside-backend-transactions - the MoneyTransfer aggregate  
  * commandside-web-transactions - a REST API for creating and retrieving Money Transfers
 
The Query Service consists the following modules:

  * queryside-backend - MongoDB-based, denormalized view of Accounts and MoneyTransfers
  * queryside-web - a REST API for querying the denormalized view

In order to be used with the embedded Event Store, the three services are currently packaged as a single monolithic web application:

  * monolithic-web - all-in-one, monolithic packaging of the application

As well as the above modules there are also:

  * common-backend - code that is shared between the command side and the query side, primarily events and value objects
  * backend-integration-tests - integrations tests for the backend
  