#!/bin/sh



###########################
# Docker SETUP
###########################
echo "Setting up Docker"
apt-get update
apt-get install linux-image-extra-`uname -r`
apt-get install cgroup-lite
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9
sudo sh -c "echo deb http://get.docker.io/ubuntu docker main\ > /etc/apt/sources.list.d/docker.list"

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
