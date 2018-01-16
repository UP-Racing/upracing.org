#!/bin/bash

gulp production
ssh $SERVER_USER@$SERVER_IP 'rm -r /var/www/stage.upracing.org/build/'
scp package.json $SERVER_USER@$SERVER_IP:/var/www/stage.upracing.org/
scp -r build $SERVER_USER@$SERVER_IP:/var/www/stage.upracing.org/build/

ssh $SERVER_USER@$SERVER_IP << EOF
    cd /var/www/stage.upracing.org.me
    yarn --production
    pm2 gracefulReload stage.upracing.org
EOF