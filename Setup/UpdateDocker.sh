
echo "Creating Docker Image"
docker build -t 'virtual_machine' - < OSDockerfile
echo "Retrieving Installed Docker Images"
docker images
