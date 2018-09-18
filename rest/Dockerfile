FROM node:10.10-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY ./src/ ./src/

CMD [ "npm", "start" ]
