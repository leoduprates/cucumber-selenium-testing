FROM node:latest

WORKDIR /cucumber-selenium-automation
COPY . /cucumber-selenium-automation
RUN npm install
CMD ["npm", "test"]


