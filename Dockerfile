FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install --platform=linuxmusl --arch=x64 sharp

COPY . .

EXPOSE 5000

CMD ["npm","run", "dev"]