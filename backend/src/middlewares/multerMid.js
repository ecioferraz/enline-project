const multer = require('multer');
const multerConfig = require('../config/multerConfig');

module.exports = multer(multerConfig).single('file');
