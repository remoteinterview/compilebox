#!/bin/sh

vm_name = $1

###########################
# Docker SETUP
###########################
echo "Setting up Docker"
apt-get update
apt-get install linux-image-extra-`uname -r`
apt-get install cgroup-lite
sh -c "echo deb http://get.docker.io/ubuntu docker main > /etc/apt/sources.list.d/docker.list"
apt-get update
apt-get install lxc-docker

###########################
# NodeJS setup
###########################

echo "Setting up NodeJs"

apt-get update
apt-get install nodejs
apt-get install npm

#############################
# Starting Docker
#############################

chmod 777 ../API/DockerTimeout.sh
chmod 777 ../API/Payload/script.sh
chmod 777 ../API/Payload/javaRunner.sh
chmod 777 UpdateDocker.sh


./UpdateDocker.sh