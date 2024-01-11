FROM node:latest
WORKDIR /var/app
COPY app/package*.json ./
RUN npm cache clean --force
RUN npm install 
COPY ./app ./
RUN chown -R node:node ./ 
USER node
EXPOSE 3000

