# getir-assignment
Getir Assignment

# initial setup
npm i -g typescript
npm init -y
npm install express && npm i --save-dev typescript ts-node @types/node @types/express
touch tsconfig.json
mkdir src && touch src/app.ts && touch src/server.ts
touch .gitignore

 # Running application
Add below scriipt to package.json
    "start": "ts-node ./src/server.ts"

# server startup
npm run start
check for localhost:3000

# adding business logic

- setting up controller interface
    mkdir interfaces && touch interfaces/controller.interface.ts

- adding record controller
    mkdir record && touch record/record.controller.ts

#  testing /ping route
   check below URL ion the browser
   localhost:3000/ping -> should return pong!

