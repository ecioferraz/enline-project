const routes = require('express').Router();
const multerMid = require('../middlewares/multerMid');
const PostController = require('../controllers/PostController');

routes
  .post('/', multerMid, PostController.upload)
  .get('/', PostController.getAll);

module.exports = routes;
