FROM nginx
MAINTAINER 656603135@qq.com
COPY dist/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf