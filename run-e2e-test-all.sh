#! /bin/bash -e

for dir in java-spring scala-spring; do
	(cd $dir ; ../run-e2e-test.sh)
done

