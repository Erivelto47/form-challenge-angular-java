FROM adoptopenjdk:11-jre-hotspot
LABEL maintainer="erivelto02@hotmail.com"
VOLUME /tmp
EXPOSE 3000
ARG JAR_FILE=target/form-challenge-angular-java-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} application.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","application.jar"]
