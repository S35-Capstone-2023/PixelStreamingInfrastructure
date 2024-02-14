#!/bin/bash

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
