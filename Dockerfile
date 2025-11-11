# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Set environment variables (override in Raleway dashboard as needed)
ENV NODE_ENV=production

# Build if needed (uncomment if you have a build step)
# RUN pnpm build

# Expose port (change if your app uses a different port)
EXPOSE 3000

# Start the server (update if your entry point is different)
CMD ["pnpm", "start"]
