#! /bin/bash -e

# Must be run in the java-spring or scala-spring directories

echo starting services

../run-all-services.sh 

echo running test

./gradlew :e2e-test:cleanTest :e2e-test:test

echo killing services

../kill-all-services.sh 

