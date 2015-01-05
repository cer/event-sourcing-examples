#! /bin/bash -e

for dir in java-spring scala-spring; do
	(cd $dir ; ./gradlew -b build.gradle $*)
done

