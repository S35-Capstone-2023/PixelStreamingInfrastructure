#!/bin/bash

# Check if node is installed
if ! command -v node >/dev/null 2>&1; then
    echo "Node is not installed. Installing now..."

    # Download and execute the install script for nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

    # Source the .bashrc file to load nvm into the current session
    # Note: This assumes that you're using bash as your shell and .bashrc is the correct profile script
    # If you're using a different shell, you might need to source a different file (like .zshrc for zsh)
    source ~/.bashrc

    # Install the desired version of Node.js using nvm
    nvm install v20.11.0

    echo "Node v20.11.0 installed."

cd /usr/local/PixelStreamingInfrastructure/Frontend

cd /library

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
