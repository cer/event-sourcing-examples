This is the Java/Spring version of the Event Sourcing/CQRS money transfer example application.

It consists of the following modules:

  * common-backend - code that is shared between the command side and the query side, primarily events and value objects
  * commandside-backend - the business logic, which consists of Account and MoneyTransfer aggregates
  * queryside-backend - MongoDB-based, denormalized view of Accounts and MoneyTransfers
  * commandside-web - a REST API for creating and retrieving Accounts and MoneyTransfers
  * queryside-web - a REST API for querying the MongoDB-based, denormalized view of Account
  * monolithic-web - all-in-one, monolithic packaging of the application
  