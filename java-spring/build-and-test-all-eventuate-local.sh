#! /bin/bash

export JAVA_OPTS="-Xmx128m -Xms128m"
export EXTRA_INFRASTRUCTURE_SERVICES=cdcservice
export EVENTUATE_LOCAL=yes
../_build-and-test-all.sh -f docker-compose-eventuate-local.yml $* -P eventuateDriver=local
