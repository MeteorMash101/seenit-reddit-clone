// "Comment" model/schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    author_username: String,
    // Comments will have a tree-like structure, its either a parent (root comment) or a child (a replying comment/thread).
    // [IMPLEMENTATION PLAN] use iterative DFS!!:
        // Add all roots to a queue:
        // while queue is not empty
        // go through every 'parent' root comment one by one, and for each root comment, go through its children replies one by one.
        // before popping the most recently added comment element from the stack, add the comment UI element of 'this'.
        // continue in DFS fashion
        // add 'replies' comments to queue if unseen before (use set of comment ids to keep track - this may not be necessary b/c all replies shud be unseen tho...)
        // pop from front of queue, and process its 'replies' if any...add to queue as well
    isRoot: {
        type: Boolean,
        default: true // parent by default, if the user clicks on 'reply', then that comment will set this to false.
    },
    // (Optional) could be replying to no one, such as if comment to original post (if isRoot === true).
    replyingTo: { // (child of)
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false,
    },
    // (Optional) could have no replies. (MIGHT ONLY NEED this)
    replies: { // (children)
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false,
    },
    text: String,
    voteCount: {
        type: Number, 
        default: 1
    },
    creationDate: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Comment', CommentSchema);