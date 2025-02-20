# Stage 1: Install dependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production

# Stage 2: Copy and Run
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY ./ ./
EXPOSE 5000
CMD ["node", "app.js"]