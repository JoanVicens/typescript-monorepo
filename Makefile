
PHONY: help

IMAGE_NAME := joan/typescript-monorepo
BACKOFFICE_APP_NAME := backoffice

# Test if the dependencies we need to run this Makefile are installed
DOCKER := $(shell command -v docker)
DOCKER_COMPOSE := $(shell command -v docker-compose)
deps:
ifndef DOCKER
	@echo "Docker is not available. Please install docker"
	@exit 1
endif
ifndef DOCKER_COMPOSE
	@echo "docker-compose is not available. Please install docker-compose"
	@exit 1
endif

# Build image
build:
	docker build -t $(IMAGE_NAME):dev .

# Start backoffice backend app
start-backoffice-backend: build
	docker-compose up $(BACKOFFICE_APP_NAME)-backend && docker-compose down

clean:
	docker-compose down --rmi local --volumes --remove-orphans