FROM java:openjdk-8u91-jdk
RUN mkdir /app
WORKDIR /app
COPY ./build/libs  /app
CMD java ${JAVA_OPTS} -jar /app/customers-query-side-service.jar
