.PHONY: *

pretty:
	npx prettier --write .

dev:
	docker-compose up
