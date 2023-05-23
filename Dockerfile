#Set image tag to comply with node version
FROM node:16.15.1-alpine

#set working directory
WORKDIR /app

#add bin folder 
ENV PATH /app/node_modules/.bin:$PATH

#add package & package-lock files
COPY package*.json ./

#Install dependencies
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

#copy the app code
COPY . ./

#Provide defaults for an executing container
CMD ["npm", "start"]

