docker build . -f Dockerfile -t hello-node

docker rm -f hello-node

docker run -d --restart unless-stopped \
  --name hello-node \
  -p 11108:80 \
  hello-node