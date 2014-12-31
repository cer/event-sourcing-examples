#Event-Sourcing+CQRS example application

This example application is the money transfer application described in my talk [Building and deploying microservices with event sourcing, CQRS and Docker](http://plainoldobjects.com/presentations/building-and-deploying-microservices-with-event-sourcing-cqrs-and-docker/).
This talk describe a way of architecting highly scalable and available applications that is based on microservices, polyglot persistence, 
event sourcing (ES) and command query responsibility separation (CQRS).
Applications consist of loosely coupled components that communicate using events. 
These components can be deployed either as separate services or, as they are here, packaged as a monolithic application for simplified development and testing. 

# About the examples

There are currently the following versions of the example application:

  * java-spring - a Java and Spring Boot example
  * scala-spring - a Scala and Spring Boot example

Other examples will be added shortly including a Scala/Play example.

For more information, please see the [wiki](../../wiki)

# About the event store

The application use an embedded SQL-based event store.

# Running the tests

To run the tests you need to set the following environment variable:

```
  export SPRING_DATA_MONGODB_URI=mongodb://192.168.59.103/yourdb
```
