FROM nginx:1.20.1-alpine

# Nginx config file
COPY ./nginx/ /etc/nginx/conf.d/

# front source code
COPY ./resource_tool_frontend/build /var/www
