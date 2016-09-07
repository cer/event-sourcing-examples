#! /bin/bash

done=false

host=$1
shift
ports=$*

while [[ "$done" = false ]]; do
	for port in $ports; do
		curl -q http://${host}:${port}/health >& /dev/null
		if [[ "$?" -eq "0" ]]; then
			done=true
		else
			done=false
			break
		fi
	done
	if [[ "$done" = true ]]; then
		echo connected
		break;
  fi
	#curl -q http://${1?}:8080/health >& /dev/null && curl -q http://${1?}:8081/health >& /dev/null && curl -q http://${1?}:8082/health >& /dev/null
	echo -n .
	sleep 1
done
