FROM node:14-alpine AS nest-app
WORKDIR /app
COPY /*.json ./
COPY . .
RUN yarn run build

FROM node:14-alpine
WORKDIR /app
COPY --from=nest-app /app ./
EXPOSE 3001
CMD ["yarn", "run", "start:prod"]