#! /bin/bash

export EXTRA_INFRASTRUCTURE_SERVICES=cdcservice
../_build-and-test-all.sh -f docker-compose-eventuate-local.yml -P eventuateLocal=1 $*
