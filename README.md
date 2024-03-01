## Setup
### Seed
docker-compose run admin_backend sh
npm run seed:products
npm run seed:links
npm run seed:orders

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
