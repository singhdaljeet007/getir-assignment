# getir-assignment
Getir Assignment

# initial setup
npm i -g typescript
npm init -y
npm install express && npm i --save-dev typescript ts-node @types/node @types/express
touch tsconfig.json
mkdir src && touch src/app.ts && touch src/server.ts
touch .gitignore

 # Running application locally
Add below scriipt to package.json
    "start": "ts-node ./src/server.ts"

# inital server startup
npm run start
check for localhost:3000

# adding business logic

- setting up controller interface

mkdir interfaces && touch interfaces/controller.interface.ts

- adding record controller with health check route

mkdir record && touch record/record.controller.ts

- testing /ping route

check below URL ion the browser

localhost:3000/ping -> should return pong!

- setting up DB connection

npm i mongoose && npm i --save-dev @types/mongoose

- adding dotenv

npm i dotenv && touch .env

- creating record interfaces & model

mkdir record && touch record/record.model.ts && touch record/record.interface.ts 

# testing the search record API locally

localhost:3000/record/search
  

# Docker & heroku setup

A Dockerfile is added with the build steps to build angular project and then compile nodejs project along with a startup command.

Application was pushed to heroku via cli using below comands:

heroku login

heroku create --app getir-assignment-020393

heroku container:login

heroku container:push web --app getir-assignment-020393

heroku container:release web --app getir-assignment-020393

heroku logs --tail --app getir-assignment-020393


# Runing the Live version

Live version can be accessed at

https://getir-assignment-020393.herokuapp.com/

To fetch records matching given criteria use below CURL

curl -X POST \
  https://getir-assignment-020393.herokuapp.com/record/search \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b7c7f13c-fc98-b803-268e-ab6efe7c59d7' \
  -d '{
	"startDate":"2015-11-28",
	"endDate":"2015-12-01",
	"minCount":2000,
	"maxCount":10000
}'
