const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    text:{type: String, required: true, minlength:2, maxlength:300},
    likes:{type:Number, default:0},
    dislikes: {type:Number, default:0},
    date:{type: Date, default:Date.now}
})

const commentSchema = new mongoose.Schema({
    text:{type: String, required: true, minlength:2, maxlength:300},
    likes:{type: Number, default:0},
    dislikes:{type: Number, default:0},
    replies:[{type: replySchema}],
    videoId: {type:String, required:true},
    date:{type:Date, default:Date.now}
})

const Comment = mongoose.model('comment', commentSchema);
const Reply = mongoose.model('reply', replySchema )

exports.Reply = Reply
exports.Comment = Comment
exports.commentSchema = commentSchema;
exports.replySchema = replySchema;