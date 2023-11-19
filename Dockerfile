FROM node:18-alpine
COPY backend/ /app/backend/
COPY lib/ /app/lib/
WORKDIR /app/backend
RUN yarn
CMD yarn start