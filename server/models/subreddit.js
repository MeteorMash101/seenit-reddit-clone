// "Subreddit" ('Sub') model/schema.
// Not allowing user's to create subs yet...(WIP)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubredditSchema = new Schema({
    name: String,
    description: String,
    numOfMembers: Number,
    // numOfActiveMembers: Number, (need to be able to track online users for this one)
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

module.exports = mongoose.model('Subreddit', SubredditSchema);