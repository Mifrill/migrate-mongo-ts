import { Db, MongoClient } from 'mongodb'

module.exports = {
  async up(db: Db, client: MongoClient): Promise<void | never> {
    const session = client.startSession()
    try {
      await session.withTransaction(async () => {
        await db.collection('collection').insertOne({ foo: 'bar' })
      })
    } finally {
      await session.endSession()
    }
  },

  async down(db: Db, client: MongoClient): Promise<void | never> {
    const session = client.startSession()
    try {
      await session.withTransaction(async () => {
        await db.collection('collection').deleteMany()
      })
    } finally {
      await session.endSession()
    }
  }
}
