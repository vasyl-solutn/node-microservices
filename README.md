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
kubectl describe pod

### Scale/delete pods
kubectl get deployments,sts,ds,replicaset -n default
kubectl delete deployment <deployment-name> -n <namespace> (namespace=default)
kubectl delete deployment email-backend
kubectl scale deployment email-backend --replicas=0

kubectl rollout restart deployment users-backend

### Kompose convert
kompose convert -f ../users/docker-compose.prod.yaml

### Switch contect to local
kubectl config get-contexts
kubectl config use-context docker-desktop
kubectl config current-context


### docker image pushing
gcloud auth configure-docker
x
docker-compose -f ../email/docker-compose.prod.yaml build
docker tag vasyl/email:0.0.2 gcr.io/microservices-413700/email
docker push gcr.io/microservices-413700/email

#### buildx with x86 platform
docker buildx build --platform linux/amd64 -t gcr.io/zeta-structure-418319/user-x86-amd64:0.0.2 -t gcr.io/zeta-structure-418319/user:latest . --push
docker buildx build --platform linux/amd64 -t gcr.io/zeta-structure-418319/user:latest . --push

### GCloud
gcloud auth login (if needed...)
gcloud config get-value project

#### shell commands
gcloud config set project ...
gcloud container clusters get-credentials node-microservices --zone=europe-central2
nano email.yaml
kubectl apply -f email.yaml

kubectl create secret generic kafka-secrets --from-literal=KAFKA_BROKERS=pkc-xmzwx.europe-central2.gcp.confluent.cloud:9092 --from-literal=KAFKA_PASSWORD=nFaTS3HTVXWQGSMI+4bKa8OdslX+p3XArnz/Cz6TxTB3VPYGn+gAvusu2k3MnckP --from-literal=KAFKA_USERNAME=TU7E4Q55RZ7YBR6A

kubectl create secret generic email-secrets --from-literal=MAIL_PASSWORD=e3fd3055b658f8 --from-literal=MAIL_USERNAME=0a70800dad2c51
