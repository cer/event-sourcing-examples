#! /bin/bash -e

# Execute this script in the java-spring or scala-spring directory
# Runs all of the services

if [[ -f account-cs.pid ]]; then
	echo pid file exists
	exit 1
fi

java -jar accounts-command-side-service/build/libs/accounts-command-side-service.jar > account-cs.log &
echo $! > account-cs.pid

java -jar accounts-query-side-service/build/libs/accounts-query-side-service.jar --server.port=8081 > account-qs.log &
echo $! > account-qs.pid

java -jar transactions-command-side-service/build/libs/transactions-command-side-service.jar --server.port=8082 > transfers-cs.log &
echo $! > transfers-cs.pid

echo -n waiting for services....

while [[ true ]]; do
	nc -z -w 4 localhost 8080 && nc -z -w 4 localhost 8081 && nc -z -w 4 localhost 8082
	if [[ "$?" -eq "0" ]]; then
		echo connected
		break
	fi
	echo -n . 
	sleep 1
done

