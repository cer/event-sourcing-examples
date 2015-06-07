while [[ true ]]; do
	nc -z -w 4 ${SERVICE_HOST?} 8080 && nc -z -w 4 ${SERVICE_HOST?} 8081 && nc -z -w 4 ${SERVICE_HOST?} 8082
	if [[ "$?" -eq "0" ]]; then
		echo connected
		break
	fi
	echo -n . 
	sleep 1
done