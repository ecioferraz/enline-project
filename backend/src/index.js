require('dotenv').config();

const express = require('express');
const router = require('./router/Router');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const MONGO_DB_URL = 'mongodb://localhost:27017/enline';

mongoose.connect(process.env.MONGO_URI || MONGO_DB_URL);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(
  path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(router);

app.listen(3001);
