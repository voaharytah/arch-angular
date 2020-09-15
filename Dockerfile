# Build angular app
FROM node:latest as node 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Copy  app into apache/htdocs
FROM httpd:2.4
COPY --from=node /app/dist/routes /usr/local/apache2/htdocs/


