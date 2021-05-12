const express = require("express");
const router = express.Router();
const { Comment, Reply } = require('../models/comment');

router.get('/', async (req, res) => { // get all comments
    try {
        const comment = await Comment.find();
        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;
