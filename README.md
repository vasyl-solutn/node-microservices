## Setup
docker-compose run admin_backend sh

### Up admin consumer
npm run consume

### Mailhog
`mailhog`
http://0.0.0.0:8025


## Up the sevices
- users service
- checkout service
- ambasador service
- admin service
- email service
- mailhog

# Front End
## Node version
16+
nvm use 16
npm i

## Up front end
npm start

### Checkout next.js
npm run dev

## Kubernetes
docker ps

kubectl apply -f email-pod.yaml

docker rm -f img-id-000
docker stop <container or image>

brew install kompose

kubectl get pods
kubectl get deployments
kubectl delete pod <pod name>
kubectl create secret generic kafka-secrets --from-literal=KAFKA_BROKERS=pkc-xmzwx.europe-central2.gcp.confluent.cloud:9092 --from-literal=...
kubectl describe pod
