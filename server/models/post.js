// "Post" model/schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    type: String, // "TEXT", "IV", "LINK"...(can use enum)
    title: String,
    textContent: {
        type: String,
        required: false
    },
    IVContent: {
        type: Buffer,
        required: false
    },
    linkContent: {
        type: String,
        required: false
    },
    voteCount: {
        type: Number,
        default: 1
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    author_username: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    // Two-way binding for now. (post -> sub && sub -> [posts])
    subreddit: {
        type: Schema.Types.ObjectId,
        ref: 'Subreddit'
    },
    creationDate: { 
        type: Date, 
        default: Date.now 
    },
});

// Remember when deleting a post, to delete all of its child comments.
module.exports = mongoose.model('Post', PostSchema);