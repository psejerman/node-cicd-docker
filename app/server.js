
const express = require('express');
const server = express();
const db =require("./db")
const PORT = process.env.PORT || 3000;

db()

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const productController = require('./controllers/productController');

server.use('/api', productController);