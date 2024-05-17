#!/bin/bash

# if node is not installed, install it
timeout=${time_out}
url=${url}

if ! command -v node &> /dev/null
then
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

npm install -g wait-on
wait-on --timeout $timeout $url
