# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy dependencies and install
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all source code
COPY . .

# Build the React app
RUN npm run build

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install `serve` globally
RUN npm install -g serve

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Expose the port
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist", "-l", "3000"]