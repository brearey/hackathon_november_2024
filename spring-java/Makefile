all: maven build start
rebuild: clean all

maven:
	sudo bash /home/lorriant/.maven/bin/mvn package && java -jar target/spring-boot-docker-0.0.1-SNAPSHOT.jar

build:
	cd target
	docker build -t spring-boot-docker .

start:
	sudo docker run -p 8080:8080 -t spring-boot-docker

clean:
	sudo rm -r target
	sudo docker rmi -f spring-boot-docker