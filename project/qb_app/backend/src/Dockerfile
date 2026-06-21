FROM node:20-alpine
WORKDIR /app
COPY ./quickbytes_app/backend/package*.json ./
RUN npm install
COPY ./quickbytes_app/backend  ./
EXPOSE 8080
CMD ["npm", "start"]