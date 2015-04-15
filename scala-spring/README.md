This is the Scala/Spring version of the Event Sourcing/CQRS money transfer example application.

# About the application

This application consists of three microservices:

  * Account Service - the command side business logic for Accounts
  * Money Transfer Service - the command side business logic for Money Transfers
  * Query service - query side implementation of a MongoDB-based, denormalized view of Accounts and MoneyTransfers
   
The Account Service consists of the following modules:

  * accounts-command-side-backend - the Account aggregate
  * accounts-command-side-web - a REST API for creating and retrieving Accounts
  * accounts-command-side-service - a standalone microservice

The Money Transfer Service consists of the following modules:

  * transactions-command-side-backend - the MoneyTransfer aggregate  
  * transactions-command-side-web - a REST API for creating and retrieving Money Transfers
  * transactions-command-side-service - a standalone microservice
 
The Query Service consists the following modules:

  * accounts-query-side-backend - MongoDB-based, denormalized view of Accounts and MoneyTransfers
  * accounts-query-side-web - a REST API for querying the denormalized view
  * accounts-query-side-service - a standalone microservice

# Deploying the application

These services can be deployed either as either separate standalone services using the Event Store server, or they can be deployed as a monolithic application for simpified integration testing.

The three services can also be packaged as a single monolithic web application in order to be used with the embedded Event Store:

  * monolithic-service - all-in-one, monolithic packaging of the application

  
