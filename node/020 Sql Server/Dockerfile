FROM node

COPY *.js /app/
COPY *.sql /app/
COPY package.json /app/
WORKDIR /app
RUN npm install

CMD [ "node", "app.js" ]
