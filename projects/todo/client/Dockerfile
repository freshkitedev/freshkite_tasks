# Stage 1: Build React App
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build && echo "Build succeeded!" || echo "Build failed!"


# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./public/env-config.js /usr/share/nginx/html/
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 80
CMD ["/entrypoint.sh", "nginx", "-g", "daemon off;"]
#CMD ["nginx", "-g", "daemon off;"]