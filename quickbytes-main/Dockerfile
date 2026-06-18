FROM node:20-alpine
WORKDIR /app
COPY ./quickbytes/package*.json ./
RUN npm install
COPY ./quickbytes  ./
EXPOSE 5173
CMD ["npm","run","dev","--","--host","0.0.0.0"]
