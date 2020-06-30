#!/bin/bash
WITNESS_ID="$1"
STAMP="zk-container"
docker build --build-arg WITNESS_ID="${WITNESS_ID}" -t sunny:zk .

docker run -t -d --name ${STAMP} sunny:zk

docker cp `docker ps --format='{{.Names}}' | grep -o ${STAMP}`:/home/zokrates/proof.json ./`docker ps --format='{{.Names}}' | grep -o ${STAMP}`_proof.json

docker stop `docker ps --format='{{.Names}}' | grep -o ${STAMP}`
docker rm `docker ps -a --format='{{.Names}}' | grep -o ${STAMP}` --force
