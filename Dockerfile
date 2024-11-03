FROM node:20
WORKDIR /app
COPY . .
RUN npm install  nodemon
RUN npm install
EXPOSE 4000
CMD [ "npm","start" ]
