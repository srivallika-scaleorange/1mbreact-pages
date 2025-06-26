FROM node:20-alpine AS builder

WORKDIR /

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:20-alpine AS production

WORKDIR /

RUN npm install -g serve

COPY --from=builder /dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]