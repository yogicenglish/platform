.PHONY: *

pretty:
	npx prettier --write .

run:
	docker-compose up
