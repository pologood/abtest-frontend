FROM centos:centos7

### NGINX SETUP

# Install the Nginx.org CentOS repo.
RUN yum install -y epel-release

# Install base stuff.
RUN yum -y install nginx unzip

# Clean up YUM when done.
RUN yum clean all

# Deletes nginx.conf that will be overriden by the project nginx conf
RUN rm -rf /etc/nginx/nginx.conf

VOLUME ["/etc/nginx"]
VOLUME ["/var/www"]

EXPOSE 80 443

### PROJECT UPLOAD

# Uploads the assets to the container
ADD ./public/build /var/www
ADD ./nginx/nginx.conf /etc/nginx/nginx.conf

# Kicking in
CMD ["nginx", "-g", "daemon off;"]