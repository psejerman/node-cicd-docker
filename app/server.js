const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT || 3000;
server.use(bodyParser.json());
const Database = require('./db');

const productRouter = require('./controllers/product.controller');
const errorRouter = require('./controllers/errors-test.controller');

server.use('/products', productRouter);
server.use('/errors', errorRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
