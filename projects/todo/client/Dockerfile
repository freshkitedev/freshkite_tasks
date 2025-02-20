# Stage 1: Build React App
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build && echo "Build succeeded!" || echo "Build failed!"
RUN ls -la /app/dist

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]