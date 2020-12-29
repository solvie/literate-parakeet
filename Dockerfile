FROM node:12.18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
CMD ["npm", "run", "start"]
EXPOSE 4000