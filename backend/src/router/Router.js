const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

routes.post('/',
  multer(multerConfig).single('file'),
  (req, res) => {
    console.log(req.file);
    return res.json('Hello, World!');
  });

module.exports = routes;
