#!/bin/bash

gulp production
ssh $SERVER_USER@$SERVER_IP 'rm -r /var/www/upracing.chrisaubert.me/build/'
scp package.json $SERVER_USER@$SERVER_IP:/var/www/upracing.chrisaubert.me/
scp -r build $SERVER_USER@$SERVER_IP:/var/www/upracing.chrisaubert.me/build/

ssh $SERVER_USER@$SERVER_IP << EOF
    cd /var/www/chrisaubert.me
    yarn --production
    pm2 gracefulReload upracing.chrisaubert.me
EOF