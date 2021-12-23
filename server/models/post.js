// "Post" model/schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postType: String, // text post, IA, link...(can use enum)
    title: String,
    text: String,
    voteCount: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    // Two-way binding for now. (post -> sub && sub -> post)
    subreddit: {
        type: Schema.Types.ObjectId,
        ref: 'Subreddit'
    },
    creationDate: String,
});

// Remember when deleting a post, to delete all of its child comments.
module.exports = mongoose.model('Post', PostSchema);