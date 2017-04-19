#!/bin/sh

###########################
# Docker SETUP
###########################
apt update
apt install -y docker.io
ln -sf /usr/bin/docker.io /usr/local/bin/docker
sed -i '$acomplete -F _docker docker' /etc/bash_completion.d/docker.io

echo "Docker Setup complete"

###########################
# NodeJS setup
###########################
apt update
apt install -y nodejs
apt install -y npm
echo "NodeJS setup Complete"

###########################
# Start Docker
###########################
chmod 777 ../API/DockerTimeout.sh
chmod 777 ../API/Payload/script.sh
chmod 777 ../API/Payload/javaRunner.sh
chmod 777 UpdateDocker.sh

service docker.io restart
./UpdateDocker.sh
