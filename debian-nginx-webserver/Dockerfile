FROM Debian:latest

RUN apt-get update

RUN apt-get install nginx

COPY containerization.html /usr/share/nginx/html/

EXPOSE 80

RUN service nginx start