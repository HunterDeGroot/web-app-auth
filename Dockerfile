FROM node
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app/
RUN npm install --production
ADD . /usr/src/app/
COPY ./prod.env /usr/src/app/.env

EXPOSE 6060

ENTRYPOINT ["npm", "start"]