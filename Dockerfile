FROM node:latest
USER node
WORKDIR /var/app
COPY app/package.json .
RUN npm install 
COPY ./app .
EXPOSE 3000
