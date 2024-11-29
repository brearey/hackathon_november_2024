all: docker
rebuild: clean all

build:
	sudo bash /home/lorriant/Загрузки/apache-maven-3.9.9-bin/apache-maven-3.9.9/bin/mvn clean package

docker: build
	sudo docker build -t springio/gs-spring-boot-docker .
	sudo docker run -p 8080:8080 springio/gs-spring-boot-docker
clean:
	sudo docker rmi -f springio/gs-spring-boot-docker