BIN = node_modules/.bin

clean:
	rm -rf ./build

build:
	gulp build

lint:
	./node_modules/.bin/eslint ./src

flow:
	./node_modules/.bin/flow

qa: lint flow

deploy: qa
	sh deploy.sh

run: build
	node build/Server

dev:
	gulp nodemon

.PHONY: clean build lint flow qa deploy run
