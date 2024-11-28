GCCFLAGS = -Wall -Werror -Wextra -std=c11
BUILD = ./s21_cat


all: docker
rebuild: clean all

docker:
	sudo docker compose up -d --build

restart:
	sudo docker restart backend

start:
	sudo docker compose start

stop:
	sudo docker compose stop

db_logs:
	sudo docker logs main_database

clean:
	sudo docker rmi -f main_database
	sudo docker rmi -f backend