const express = require('express');
const bodyParser = require('body-parser');
const modelPosts = require('./model/posts')

const server = express();
const PORT = 3000;

server.get('/all', (req, res) => {
  const allPosts = modelPosts.getAll();
  const JSONAllPosts = JSON.stringify(allPosts);

  res.json(JSONAllPosts);
});

server.post('/new', bodyParser.json(), (req, res) => {
  const { title, description } = req.body;

  modelPosts.newPost(title, description)

  res.send('Post adicionado com sucesso!');
});

server.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});