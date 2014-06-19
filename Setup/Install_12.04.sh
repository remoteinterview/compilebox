#!/bin/sh

###########################
# Docker SETUP
###########################
apt-get update

echo "Installing Docker"

[ -e /usr/lib/apt/methods/https ] || {
  apt-get update
  apt-get install apt-transport-https
}

apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9

sh -c "echo deb https://get.docker.io/ubuntu docker main\
> /etc/apt/sources.list.d/docker.list"

apt-get update
apt-get install lxc-docker


###########################
# NodeJS setup
###########################

echo "Installing NodeJS"

apt-get update
apt-get install nodejs
apt-get install npm

chmod 777 ../API/DockerTimeout.sh
chmod 777 ../API/Payload/script.sh
chmod 777 ../API/Payload/javaRunner.sh
chmod 777 UpdateDocker.sh

./UpdateDocker.sh 

