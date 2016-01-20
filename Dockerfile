FROM centos:centos7

### NGINX SETUP

# Install the Nginx.org CentOS repo.
RUN yum install -y epel-release

# Install base stuff.
RUN yum -y install nginx unzip

# Clean up YUM when done.
RUN yum clean all

# Downloads nginx minimal config
RUN cd /tmp && \
  curl -O https://raw.githubusercontent.com/fedevegili/abtest-frontend/master/nginx/nginx.conf

RUN rm -rf /etc/nginx/nginx.conf
RUN mv /tmp/nginx.conf /etc/nginx

VOLUME ["/etc/nginx"]
VOLUME ["/var/www"]

EXPOSE 80 443


### PROJECT DOWNLOAD

# Downloads abtest-frontend master
RUN cd /tmp && curl -O https://codeload.github.com/softexpertsa/abtest-frontend/zip/master

# Unzip the project
RUN unzip /tmp/master -d /var/www

# Kicking in
CMD ["nginx", "-g", "daemon off;"]