const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3000;

const posts = [
  {
    id: 1,
    title: 'Título do post',
    description: 'Descrição do post'
  }
];

const idGenerator = () => Math.random().toString(36).slice(2);

server.get('/all', (req, res) => {
  res.json(JSON.stringify(posts));
});

server.post('/new', bodyParser.json(), (req, res) => {
  let id = idGenerator();
  let title = req.body.title;
  let description = req.body.description;

  posts.push({id, title, description});

  res.send('Post adicionado com sucesso!');
});

server.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});