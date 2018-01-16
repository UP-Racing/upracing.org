#!/bin/bash

gulp production
ssh $SERVER_USER@$SERVER_IP 'rm -r /var/www/upracing.org/build/'
scp package.json $SERVER_USER@$SERVER_IP:/var/www/upracing.org/
scp -r build $SERVER_USER@$SERVER_IP:/var/www/upracing.org/build/

ssh $SERVER_USER@$SERVER_IP << EOF
    cd /var/www/upracing.org.me
    yarn --production
    pm2 gracefulReload upracing.org
EOF