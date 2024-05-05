import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const client = await MongoClient.connect('mongodb+srv://madindo:LQwJ183pAzfmPhb2>@testing.lv2ecnz.mongodb.net/?retryWrites=true&w=majority&appName=Testing');
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db('events');
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}
