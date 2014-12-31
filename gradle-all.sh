#! /bin/bash -e

for dir in java-spring scala-spring; do
	$dir/gradlew -b $dir/build.gradle $*
done

