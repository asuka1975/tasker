FROM node:21-alpine3.18

WORKDIR /opt/app

COPY index.ts .
COPY package.json .
COPY tsconfig.json .

RUN npm i

ENTRYPOINT [ "npx", "ts-node", "index.ts" ]

EXPOSE 3000