const express = require('express');
const router = express.Router();
const {Comment, Reply} = require('../models/comment')

// GET A COMMENTS

router.get('/:videoId', async (req,res)=>{
    try{
        const comment = await Comment.find({videoId: req.params.videoId});
        return res.send(comment);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//POST A COMMENT

router.post('/:videoId', async (req,res)=>{
        try{
            const comment = new Comment({
            text: req.body.text,
            videoId: req.params.videoId
            });
    
            await comment.save();
            const comments = await Comment.find()
            return res.send(comments);
        }catch(ex){
            return res.status(500).send(`Internal Server Error: ${ex}`);
        }
});

//POST A REPLY
router.post('/reply/:videoId/:commentId', async (req,res)=>{
    try{
        const comment = await Comment.findById(req.params.commentId);
    
        const reply = new Reply({
            text: req.body.text,
            videoId: req.params.videoId
        });
        await comment.save();
        const comments = await Comment.find();
        return res.send(comments);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//PUT add a like

router.put('/like/:videoId', async (req,res)=>{
    try{
        const comment = await Comment.findById();
        comment.likes++;
        await comment.save();
        const comments = await Comment.find()
        return res.send(comments);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
//PUT add a dislike

router.put('dislike/:videoId', async (req,res)=>{
    try{
        const comment = await Comment.findById({videoId: req.params.videoId});
        comment.dislikes++;
        await comment.save();
        const comments = await Comment.find()
        return res.send(comments);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;