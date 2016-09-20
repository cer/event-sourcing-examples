#!/bin/bash -e

IP=$(docker-machine ip default)

echo Accounts command-side service = http://${IP}:8080/swagger-ui.html
echo Money Transfers command-side service = http://${IP}:8082/swagger-ui.html
echo Accounts query-side service = http://${IP}:8081/swagger-ui.html
