const PostModel = require('../models/PostModel');

const post = async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;

  const post = await PostModel.create({ name, size, key, url: '' });

  return res.json(post);
};

module.exports = {
  post,
};
