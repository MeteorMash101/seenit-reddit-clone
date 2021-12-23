// "User" model/schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    usersPosts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    usersComments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    // NOTE: not inc. user's comments votes for now.
    usersPostsUpvotes: [ 
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    usersPostsDownvotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    subsJoined: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subreddit'
        }
    ],
});

module.exports = mongoose.model('User', UserSchema);