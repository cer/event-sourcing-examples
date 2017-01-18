This is the Java/Spring version of the Event Sourcing/CQRS money transfer example application.

# About the application

This application consists of the following microservices:

  * Account Service - the command side business logic for Accounts
  * Account View Service - query side implementation of a MongoDB-based, denormalized view of Accounts
  * Customer Service - the command side business logic for Customers
  * Customer View Service - query side implementation of a MongoDB-based, denormalized view of Customers
  * Transaction Service - the command side business logic for Money Transfers
