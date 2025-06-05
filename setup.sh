# Responsible for creating volumes and networks

source .env.network
source .env.volume

if ["$(docker volume ls -q -f name=$VOLUME_NAME)"]