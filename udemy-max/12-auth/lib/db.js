import { MongoClient } from 'mongodb';

export async function connectToDatabase()  {
  const client = await MongoClient.connect(
    "mongodb+srv://madindo:uAIKfovVbmWoh0EX@testing.lv2ecnz.mongodb.net/?retryWrites=true&w=majority&appName=Testing"
  );
  return client;
}