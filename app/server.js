const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT || 3000;
server.use(bodyParser.json());

const productController = require('./controllers/productController');

server.use('/api', productController);


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});