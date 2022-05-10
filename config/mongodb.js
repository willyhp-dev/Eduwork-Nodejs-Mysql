const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const dbName = 'admin';
const url = 'mongodb://EduworkWilly:pontianak1@localhost:27017?authSource='+dbName;
const client = new MongoClient(url);


(async () => {
  try {
    await client.connect();
    console.log('koneksi ke mongodb Berhasil')
  } catch (error) {
    console.log(error);
  }
})();
const db = client.db('List');
module.exports = db;