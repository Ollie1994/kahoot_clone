import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("kahootclone"); // or db('your-db-name')
    const collections = await db.listCollections().toArray();

    return new Response(JSON.stringify({ success: true, collections }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
