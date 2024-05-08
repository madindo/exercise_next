import { MongoClient } from 'mongodb';

export async function connectToDatabase()  {
  const client = await MongoClient.connect(
    "mongodb+srv://test:******@testing.lv2ecnz.mongodb.net/?retryWrites=true&w=majority&appName=Testing"
  );
  return client;
}