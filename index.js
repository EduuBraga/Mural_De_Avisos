const express = require('express');
const path = require('path');
const routersPost = require('./routers/post.js')

const server = express();
const PORT = 3000;

server.use('/post', routersPost)
server.use('/', express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});