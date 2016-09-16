#! /bin/bash

export JAVA_OPTS="-Xmx128m -Xms128m"
../_build-and-test-all.sh $*
