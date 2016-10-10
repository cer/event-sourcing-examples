FROM java:openjdk-8u91-jdk
RUN mkdir /app
WORKDIR /app
COPY ./build/libs  /app
CMD java ${JAVA_OPTS} -jar /app/api-gateway-service.jar --accounts.commandside.service.host=accountscommandside --transfers.commandside.service.host=transactionscommandside --accounts.queryside.service.host=accountsqueryside --customers.commandside.service.host=customerscommandside  --customers.queryside.service.host=customersqueryside

