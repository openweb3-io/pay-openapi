regen:
	./regen_openapi.sh

rebuild:
	cd javascript && yarn install && yarn build
	cd java && ./gradlew build

publishjs:
	cd javascript && npm publish @openweb3.io/pay --access=public