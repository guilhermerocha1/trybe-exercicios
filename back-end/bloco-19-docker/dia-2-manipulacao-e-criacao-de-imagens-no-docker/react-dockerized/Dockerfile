FROM node:14-alpine as build
WORKDIR /app
COPY package*.json ./
COPY . .

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
