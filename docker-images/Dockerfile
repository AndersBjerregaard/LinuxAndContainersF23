# A proposed dockerfile solution to the given problem:
#   Upgrade all debian packages
#   Installs Nginx
#   Copies a little html page

# Base this upon the latest debian image
FROM debian:latest

# Identify updates for all debian packages
RUN apt update

# Upgrade all identified updates
# the -y affix auto-responds to any "continue[Y/n]" prompt with a Y
RUN apt full-upgrade -y

# Install nginx
RUN apt install nginx -y

# Copy a html file into the filesystem
COPY . /simple-html