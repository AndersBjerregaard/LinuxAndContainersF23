FROM node:18

# Create app directory
WORKDIR /usr/src/nodejs-webapp

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./

RUN npm Install

# Bundle app source
COPY . .

# Since the app binds to port 8080, map it through the docker daemon:
EXPOSE 8080

# Define command to run app using CMD (runtime):
CMD [ "node", "server.js" ]