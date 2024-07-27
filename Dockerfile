FROM node:20-slim AS base

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

COPY --link package-lock.json package.json ./
RUN npm ci

COPY --link . .

RUN npm run build:tailwind

FROM base

COPY --from=build /app /app

EXPOSE 3000
CMD [ "npm", "start" ]