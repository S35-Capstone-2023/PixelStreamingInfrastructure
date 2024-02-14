#!/bin/bash

# Check if node is installed
if ! command -v node >/dev/null 2>&1; then
    echo "Node is not installed. Installing now..."

    cd ~
    curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh

    sudo bash nodesource_setup.sh

    sudo apt install nodejs -y

    echo "Node v20.x installed."

fi

cd /usr/local/PixelStreamingInfrastructure/Frontend

cd ./library

npm i
npm run build-dev

cd ../ui-library
npm i
npm link ../library
npm run build-dev

cd ../implementations/react
npm i
npm link ../../library ../../ui-library

npm run serve
