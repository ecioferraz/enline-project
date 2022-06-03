const PostModel = require('../models/PostModel');

const upload = async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file;

  const post = await PostModel.create({ name, size, key, url });

  return res.json(post);
};

const getAll = async (req, res) => {
  const posts = await PostModel.find();

  return res.json(posts);
};

module.exports = {
  upload,
  getAll,
};
