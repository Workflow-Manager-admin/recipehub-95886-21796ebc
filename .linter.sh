#!/bin/bash
cd /home/kavia/workspace/code-generation/recipehub-95886-21796ebc/recipe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

