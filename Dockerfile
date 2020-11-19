FROM ubuntu:bionic

# set version and maintainer label
LABEL version="1.0" maintainer="Chad Hutchins <chadhutchins182@users.noreply.github.com>"

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get dist-upgrade -y && apt-get install -y procps curl apt-utils && \
    curl -sL https://deb.nodesource.com/setup_15.x | bash - && \
    apt-get install -yq nodejs build-essential && \
    npm install -g npm && \
    mkdir ptn

ADD ./etc/PPL-1.3.3-64bit.deb .
ADD ./src/ /ptn

RUN apt-get install -y /PPL-1.3.3-64bit.deb

WORKDIR /ptn

RUN npm i

CMD [ "node", "index.js" ]