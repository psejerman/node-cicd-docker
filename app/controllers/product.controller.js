const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const Database = require("../db");
router.get('/all', async(req, res) => {
    try {
        await Database.connect();
        const products = await Product.find();
        res.json(products);
        await Database.close();
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

router.post('/add', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    try {
        await Database.connect();
        const newProduct = await product.save();
        res.status(201).json(newProduct);
        await Database.close();
    } catch (e) {
        res.status(400).json({message: e.message});
    }




});


module.exports = router;