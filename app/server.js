const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT || 3000;
server.use(bodyParser.json());

require('./db');

server.get('/', (req, res) => {
  res.send('Hallo');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});