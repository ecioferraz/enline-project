const mongoose = require('mongoose');

const MONGO_DB_URL = 'mongodb://mongodb:27017/enline';

module.exports = (
  mongoDatabaseURI = process.env.MONGO_URI ||
  MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);
