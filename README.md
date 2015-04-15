#Event-Sourcing+CQRS example application

This example application is the money transfer application described in my talk [Building and deploying microservices with event sourcing, CQRS and Docker](http://plainoldobjects.com/presentations/building-and-deploying-microservices-with-event-sourcing-cqrs-and-docker/).
This talk describe a way of architecting highly scalable and available applications that is based on microservices, polyglot persistence, 
event sourcing (ES) and command query responsibility separation (CQRS).
Applications consist of loosely coupled components that communicate using events. 
These components can be deployed either as separate services or packaged as a monolithic application for simplified development and testing. 

# About the examples

There are currently the following versions of the example application:

  * java-spring - a Java and Spring Boot example
  * scala-spring - a Scala and Spring Boot example

Other examples will be added shortly including a Scala/Play example.

For more information, please see the [wiki](../../wiki)

# About the event store

The application use one of two event stores:

* embedded SQL-based event store, which is great for integration tests
* event store server

# Running the tests

To run the tests you need to set some environment variable.

First, you need to tell the query side code how to connect to MongoDB:

```
  export SPRING_DATA_MONGODB_URI=mongodb://192.168.59.103/yourdb
```

Docker is a great way to run MongoDB. 
For more information please see this [blog post](http://plainoldobjects.com/2015/01/14/need-to-install-mongodb-rabbitmq-or-mysql-use-docker-to-simplify-dev-and-test/).

Second, in order for the tests in accounts-command-side-service, transactions-command-side-service and accounts-query-side-service to pass you need to set some environment variables that tell the service how to connect to the Event Store server.
But don't worry. The build is configured to ignore failures for those projects
