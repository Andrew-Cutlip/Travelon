FROM node:12.18.1

WORKDIR /home

COPY src/front_end .

RUN npm install

COPY src/front_end .

CMD npx serve build