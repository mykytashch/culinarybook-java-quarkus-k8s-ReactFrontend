#!/bin/bash
cd /root/culinarybook-java-quarkus-k8s-ReactFrontend
git pull
npm install
pm2 restart culinarybook  # замените "culinarybook" на имя вашего приложения в pm2
