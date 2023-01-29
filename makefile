.PHONY: start, test

start:
	source .env && npm run start

test:
	/usr/bin/time npm run test
