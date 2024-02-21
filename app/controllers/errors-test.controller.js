const express = require('express');
const router = express.Router();


router.get('/401', async(req, res) => {
    try {
        res.sendStatus(401);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});
module.exports = router;
