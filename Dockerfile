FROM node:12

#create app dir
WORKDIR /usr/src/app

COPY package*.json ./
COPY .env.example .env

RUN npm install 

#Bundle Source Code 
COPY . .


CMD [ "npm", "run",  "dev" ]

