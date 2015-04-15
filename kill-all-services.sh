#! /bin/bash 

kill `cat account-cs.pid		account-qs.pid		transfers-cs.pid`
rm account-cs.pid account-qs.pid transfers-cs.pid
