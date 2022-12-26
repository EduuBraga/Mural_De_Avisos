const express = require('express');
const bodyParser = require('body-parser');
const modelPosts = require('../model/posts');

const router = express.Router();

router.get('/all', (req, res) => {
  const allPosts = modelPosts.getAll();
  const JSONAllPosts = JSON.stringify(allPosts);

  res.json(JSONAllPosts);
});

router.post('/new', bodyParser.json(), (req, res) => {
  const { title, description } = req.body;

  modelPosts.newPost(title, description);

  res.send('Post adicionado com sucesso!');
});

module.exports = router;