#!/bin/bash

set -e

# build backend image
docker build -t sushi-backend .

# run an backend container
docker run -p 8000:8000 -d sushi-backend
