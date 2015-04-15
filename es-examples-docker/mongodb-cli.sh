#! /bin/bash

docker run --link esexamplesdocker_mongodb_1:mongodb -i -t dockerfile/mongodb:latest /usr/bin/mongo --host mongodb

