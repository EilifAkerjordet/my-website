# Base on offical Node.js Alpine image
FROM strapi/base

# Set working directory
WORKDIR /srv/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./

# Install dependencies
RUN yarn install

# Copy all files
COPY ./ ./

# Expose the listening port
EXPOSE 1337

# Run npm start script when container starts
CMD [ "yarn", "develop" ]
