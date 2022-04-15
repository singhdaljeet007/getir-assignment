# STAGE 1
FROM node:12-alpine as builder

WORKDIR /getir-assignment-020393-020393

COPY package.json .

RUN npm config set unsafe-perm true && npm install && npm i -g typescript

COPY . .

RUN tsc

CMD ["npm", "start"]