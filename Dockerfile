# Use Node to build and serve the app
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the React app
RUN npm run build

# Install `serve` to serve the built app
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Serve the app from `dist` folder
CMD ["serve", "-s", "dist", "-l", "3000"]
