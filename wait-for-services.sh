#! /bin/bash

while [[ true ]]; do
	nc -z -w 4 ${1?} 8080 && nc -z -w 4 ${1?} 8081 && nc -z -w 4 ${1?} 8082
	if [[ "$?" -eq "0" ]]; then
		echo connected
		break
	fi
	echo -n .
	sleep 1
done
