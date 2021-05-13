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

//POST A COMMENT

router.post('/comment', async (req,res)=>{
        try{
            const comment = new Comment({
            text: req.body.params
            });
    
            await comment.save();
            return res.send(comment);
        }catch(ex){
            return res.status(500).send(`Internal Server Error: ${ex}`);
        }
});

//POST A REPLY
router.post('/:commentId', async (req,res)=>{
    try{
        const comment = await Comment.findById(req.params.commentId);
    
        const reply = new Reply({
            text: req.params.body
        });
        await comment.save();
        const comments = await Comment.find();
        return res.send(comments);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;