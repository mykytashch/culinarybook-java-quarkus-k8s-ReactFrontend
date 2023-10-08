# Стадия сборки
FROM node:14 AS build-stage
WORKDIR /app
COPY ./package*.json ./


RUN npm install
COPY . ./
RUN npm run build

# Стадия продакшена
FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
