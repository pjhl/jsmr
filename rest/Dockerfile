FROM node:10.10-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY ./src/ ./src/

EXPOSE 80

CMD [ "npm", "start" ]
