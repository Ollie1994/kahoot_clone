// lib/mongodb.js
import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGODB_URI)

export async function connectToDatabase() {
  if (!client.isConnected()) await client.connect()
  return client.db() // defaults to the DB in your URI
}
