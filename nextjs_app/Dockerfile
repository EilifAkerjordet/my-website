# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /app

# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./

# Install dependencies
RUN yarn install

# Copy all files
COPY ./ ./

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD [ "yarn", "dev" ]
