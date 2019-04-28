FROM node:10.14.2
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD node index.js