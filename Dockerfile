FROM node:14.18-bullseye

WORKDIR /usr/src/app

RUN chown node:node /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./ ./

USER node

CMD [ "node", "src/index.js" ]

