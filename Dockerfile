# Use the official NGINX image as the base
FROM nginx:latest

# Copy your custom index.html to the NGINX web root
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 (default NGINX port)
EXPOSE 80