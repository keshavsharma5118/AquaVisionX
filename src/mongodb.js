const { MongoClient } = require('mongodb');

// Replace with the connection URL provided by your friend
const url = 'mongodb+srv://pratikkumarsah07:BxCIcIk3W92FHopd@aquavisionx.phg2dvb.mongodb.net/';
const dbName = 'AquaVisionX'; // The database name

let db = null;

async function connectToDatabase() {
  if (db) return db;

  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
