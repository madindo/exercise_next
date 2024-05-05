
import { connectDatabase, insertDocument, getAllDocuments } from '../../../helpers/db-util.js';

async function handler(req, res) {
  const eventId = req.query.eventId;

  try {
    const client = await connectDatabase();
  } catch (error) {
    res.status(500).json({message: 'Connecting to the database failed'});
  }


  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({message: 'Invalid input.'});
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId
    };

    // const db = client.db('events');
    // const result = await db.collection('comments').insertOne(newComment);


  try {
    const result = await insertDocument(client, 'comments', newComment);
  } catch (error) {
    res.status(500).json({message: 'Inserting comment failed!'});
  }
    newComment._id = result.insertedId;
    res.status(201).json({ message: 'Added comment.', comment: newComment});
  }

  if (req.method === 'GET') {
    try {
      const documents = getAllDocuments(client, 'comments', {_id: -1});
      res.status(200).json({comments: documents});
    } catch (error) {
      res.status(500).json({message: 'Getting comments failed.'});
    }
  }
  client.close();
}

export default handler