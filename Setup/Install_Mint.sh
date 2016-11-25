#!/bin/sh

vm_name = $1

###########################
# Docker SETUP
###########################
echo "Setting up Docker"
apt-get update
apt-get install -y linux-image-extra-`uname -r`
apt-get install -y cgroup-lite
sh -c "echo deb http://get.docker.io/ubuntu docker main > /etc/apt/sources.list.d/docker.list"
apt-get update
apt-get install -y lxc-docker

###########################
# NodeJS setup
###########################

echo "Setting up NodeJs"

apt-get update
apt-get install -y nodejs
apt-get install -y npm

#############################
# Starting Docker
#############################

chmod 777 ../API/DockerTimeout.sh
chmod 777 ../API/Payload/script.sh
chmod 777 ../API/Payload/javaRunner.sh
chmod 777 UpdateDocker.sh


./UpdateDocker.sh
