FROM node:10.10-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]
