import { MongoClient, ClientSession } from 'mongodb'

export const handleTransaction = async (
  client: MongoClient,
  execute: (session: ClientSession) => Promise<void | never>
): Promise<void | never> => {
  const session = await client.startSession()
  try {
    await session.withTransaction(async () => {
      await execute(session)
    })
  } finally {
    await session.endSession()
  }
}
