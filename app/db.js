const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URL = process.env.MONGODB_URL
const db = async () => {
    try {
        const connection = await mongoose.connect(URL)
        console.log("Database connection established: " + connection.connection.host);
    } catch (error) {
        console.error(error);
    }
}
module.exports = db;