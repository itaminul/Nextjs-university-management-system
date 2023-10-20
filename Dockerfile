FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run dev

COPY .next ./.next

CMD ["npm", "run", "dev"]

# https://www.youtube.com/watch?v=DJ6vHFVLwyk
# https://www.youtube.com/watch?v=aNh8iShFXto