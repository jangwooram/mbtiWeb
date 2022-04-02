FROM node:14.16.1-alpine

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@5.0.0 -g

ENV PATH /app/node_modules/.bin:$PATH

COPY ./ /app/
WORKDIR /app/