import { MongoClient, ServerApiVersion } from "mongodb";

// Connection string
const URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@blogs0.hdjhvcq.mongodb.net/?retryWrites=true&w=majority`;

/* 
  Create a MongoClient with a MongoClientOptions object to set the Stable API version and connect to a deployment on Atlas.
*/
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let cachedClient: MongoClient | null = null;

export async function connectToDB() {
  try {
    if (cachedClient !== null) {
      return cachedClient;
    }

    // Connect the client to the server
    await client.connect();

    cachedClient = client;
    return cachedClient;
  } catch (error) {
    console.log(error);
    throw new Error("Could not connect to the database.");
  }
}
