#!/bin/bash
cd /var/www/mykyta.fun
git pull
npm install
npm run build  # Здесь выполняется сборка React-приложения
