const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DbURL = process.env.MONGODB_URL
mongoose.connect(DbURL);
mongoose.connection.on('error', (error)=>{
    console.log(error);
});
mongoose.connection.on('connection', (result)=>{
    console.log(' Database connection established.');
});