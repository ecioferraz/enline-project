const PostModel = require('../models/PostModel');

const upload = async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file;

  const post = await PostModel.create({ name, size, key, url });

  return res.status(201).json(post);
};

const getAll = async (_req, res) => {
  const posts = await PostModel.find();

  return res.json(posts);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  const post = await PostModel.findById(id);

  if (!post) return res.status(404).json({ message: 'Object not found.' });

  await post.remove();

  return res.send();
};

module.exports = {
  upload,
  getAll,
  deleteById,
};
