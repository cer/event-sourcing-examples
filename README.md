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

# About the Event Store

The application uses one of two event stores:

* Embedded SQL-based event store, which is great for integration tests.
It is also used when running the monolithic version of the application.
* Event Store server - this is a full featured event store.
See this [wiki page](../../wiki/AboutTheEventStoreServer) for more details.

# Building the application (and running the tests)

Both projects use Gradle.
To build a project, execute this command:

```
./gradlew assemble
```

This will build a Spring Boot jar in each of the `*-service` directories.

You can also run the tests using `gradle build`.
However, you must set some environment variables.

First, you need to tell the query side code how to connect to MongoDB:

```
  export SPRING_DATA_MONGODB_URI=mongodb://192.168.59.103/yourdb
```

[Docker Compose](https://docs.docker.com/compose/) is a great way to run MongoDB.
You can run the `docker-compose up -d mongodb` to run MongoDB.

Second, some of the tests in accounts-command-side-service, transactions-command-side-service, accounts-query-side-service and e2e-test need you need to set some environment variables that tell them how to connect to the Event Store server.
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

## Running the microservices

The other option is to run the services separately.
However, in order to do this you need to [get credentials for the Event Store](../../wiki/AboutTheEventStoreServer).

One way to run the services is to use the scripts `run-all-services.sh`, which runs the services, and `kill-all-services.sh`, which kills the processes.

A much better way, however, is to use Docker Compose.
Simply run the command `docker-compose up` to launch the services.
This will create containers for MongoDB and each of the services.

You can now, for example, use the curl commands in `handy-curl-commands.sh` to interact with the server.
