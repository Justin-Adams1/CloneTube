const express = require('express');
const router = express.Router();
const {Comment, Reply} = require('../models/comment')

// GET ALL COMMENTS

router.get('/comments', async (req,res)=>{
    try{
        const comment = await Comment.find();
        return res.send(comment);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;