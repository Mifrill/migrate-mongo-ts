```bash
npm run i
npm run compile
npm run db:migrate:status
npm run db:migrate
npm run db:rollback

db:migrate:create <title>
```

📓 https://github.com/seppevs/migrate-mongo/issues/79#issuecomment-689834972

📝
```bash
docker run -d --rm --name migrate-mongo-dev -p 27019:27019 mongo:5 mongod --port 27019 --replSet testRS0
docker exec migrate-mongo-dev mongo --host localhost:27019 --eval 'rs.initiate();rs.reconfig({ "_id": "testRS0", "members": [{ "_id": 0, "host": "localhost:27019" }] }, { force: true });'
docker stop migrate-mongo-dev

mongodb://localhost:27019/migrate-mongo-dev
```
