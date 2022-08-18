FROM node:16.17.0-alpine3.16
WORKDIR /app
COPY package*.json /app
RUN npm install
RUN npm install -g pm2@latest
COPY . /app
CMD [ "pm2-runtime", "start", "hello-node-pm2.config.js"]
EXPOSE 80