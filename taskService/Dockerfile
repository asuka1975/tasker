FROM node:21-alpine3.18 AS builder

WORKDIR /opt/builder

COPY index.ts .
COPY package.json .
COPY tsconfig.json .

RUN npm i
RUN npm run build

FROM node:21-alpine3.18 AS runner

WORKDIR /opt/app

COPY --from=builder /opt/builder/node_modules node_modules
COPY --from=builder /opt/builder/dist/index.js .

ENTRYPOINT [ "node", "index.js" ]

EXPOSE 3000