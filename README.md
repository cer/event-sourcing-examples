#Event-Sourcing+CQRS example application

This example application is the money transfer application described in my talk [Building and deploying microservices with event sourcing, CQRS and Docker](http://plainoldobjects.com/presentations/building-and-deploying-microservices-with-event-sourcing-cqrs-and-docker/).
This talk describes a way of architecting highly scalable and available applications that is based on microservices, polyglot persistence,
event sourcing (ES) and command query responsibility segregation (CQRS).
Applications consist of loosely coupled components that communicate using events.
These components can be deployed either as separate services or packaged as a monolithic application for simplified development and testing.

# Built using the Eventuate platform

<a href="http://eventuate.io"><img src="http://eventuate.io/i/logo.gif"> </a>

Read the <a href="http://eventuate.io">overview</a> or look at the other <a href="http://eventuate.io/exampleapps.html">example applications</a>.

# Big ideas

This example illustrates several important concepts:

* How to decompose an application into microservices - as described below the application consists of several services.
For example, bank accounts are managed by one service, money transfers by another service.

* Using an event-driven architecture to achieve data consistency - rather than using traditional distributed transaction to maintain database consistency this application uses an eventually consistent, event-driven approach.

* Using event sourcing to implement the event-driven architecture - the domain logic consists of Domain-Driven Design (DDD) aggregates that using event sourcing.

* Using Command Query Responsibility Segregation (CQRS) - update requests (HTTP POSTs and PUTs) and view requests (HTTP GETs) are handled by separate services.

* How event sourcing enables deployment flexibility - the application can either be deployed as a monolith or as microservices.

# About the example application

This example application provides a REST API for creating and viewing bank accounts and transferring money between them.

The following diagram shows the architecture:

![Money transfer architecture](https://github.com/cer/event-sourcing-examples/wiki/i/applicationarchitecture.png)

There are four logical services:

* Accounts (command-side) - REST API for creating accounts
* Money transfers (command-side) - REST API for transferring money
* Account view updater (query-side) - subscribes to events and updates a MongoDB View
* Account view reader (query-side) - REST API for retrieving accounts

One of the neat things about the modular architecture is that there are two ways to deploy these four services:

* monolithic-service - all services are packaged as a single Spring Boot executable JAR
* Microservices - three separate Spring Boot executable JARs
 * accounts-command-side-service - command-side accounts
 * transactions-command-side-service - command-side money transfers
 * accounts-query-side-service - Account View Updater and Account View Reader

# About the examples

There are currently the following versions of the example application:

  * java-spring - a Java and Spring Boot example
  * scala-spring - a Scala and Spring Boot example

Other examples will be added shortly including a Scala/Play example.

For more information, please see the [wiki](../../wiki)

# About the Event Store

The application uses one of two event stores:

* Embedded SQL-based event store, which is great for integration tests.
It is also used when running the monolithic version of the application.
* Event Store server - this is a full featured event store.
See this [wiki page](../../wiki/AboutTheEventStoreServer) for more details.

# Building the application (and running the tests)

Both versions of the application use Gradle.
To build an application, execute this command  in the application's top-level directory:

```
./gradlew assemble
```

Note: you do not need to install Gradle.
It will be automatically downloaded by `./gradlew`.

This will build a Spring Boot jar in each of the `*-service` directories.

You can also run the tests using `gradle build`.
However, you must set some environment variables.

First, you need to tell the query side code how to connect to MongoDB:

```
  export SPRING_DATA_MONGODB_URI=mongodb://192.168.59.103/yourdb
```

[Docker Compose](https://docs.docker.com/compose/) is a great way to run MongoDB.
You can run the `docker-compose up -d mongodb` to run MongoDB and then set `SPRING_DATA_MONGODB_URI` as follows:
```
  export SPRING_DATA_MONGODB_URI=mongodb://$(docker-machine ip default)/yourdb
```

Second, some of the tests in accounts-command-side-service, transactions-command-side-service, accounts-query-side-service and e2e-test require you to set some environment variables that tell them how to connect to the Event Store server.
But don't worry.
The build is configured to ignore failures for those projects.

# Running the application

To run the application, you must to set the SPRING_DATA_MONGODB_URI environment variable, which tells the query services how to connect to MongoDB.

There are a couple of different ways of running the application.

## Running the monolithic application

One option is to run the self-contained monolithic application.
It uses the embedded event store.

Simply use this command:

```
java -jar monolithic-service/build/libs/monolithic-service.jar
```

This will start the service running on port 8080 (you can change using the --server.port=9999 option).

Once the service has started you can open the Swagger UI: http://localhost:8080/swagger-ui.html.
You can then:

1. Create two accounts (save the account ids)
2. Create a money transfer
3. View the updated account balances

## Running the microservices

The other option is to run the services separately.
However, in order to do this you need to [get credentials for the Event Store](../../wiki/AboutTheEventStoreServer).

One way to run the services is to use the scripts `run-all-services.sh`, which runs the services, and `kill-all-services.sh`, which kills the processes.

A much better way, however, is to use Docker Compose.
Simply run the command `docker-compose up` to launch the services.
This will create containers for MongoDB and each of the services.

You can now, for example, use the curl commands in `handy-curl-commands.sh` to interact with the server.

You can also use the Swagger UI exposed by each service `http://host:port/swagger-ui.html`.
