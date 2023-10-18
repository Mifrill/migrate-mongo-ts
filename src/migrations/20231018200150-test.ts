import { Db, MongoClient } from 'mongodb'

import { handleTransaction } from 'db/handleTransaction'

module.exports = {
  async up(db: Db, client: MongoClient): Promise<void | never> {
    await handleTransaction(client, async (_session) => {
      await db.collection('collection').insertOne({ foo: 'bar' })
    })
  },

  async down(db: Db, client: MongoClient): Promise<void | never> {
    await handleTransaction(client, async (_session) => {
      await db.collection('collection').deleteMany()
    })
  }
}
