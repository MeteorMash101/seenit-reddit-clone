// "Comment" model/schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // (Optional) could be replying to no one, such as if comment to original post.
    replyingTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    voteCount: Number
    creationDate: String,
});

module.exports = mongoose.model('Comment', CommentSchema);