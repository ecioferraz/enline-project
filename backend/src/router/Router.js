const routes = require('express').Router();
const multerMid = require('../middlewares/multerMid');
const PostController = require('../controllers/PostController');

routes.post('/', multerMid, PostController.post);

module.exports = routes;
