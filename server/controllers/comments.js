const { WriteError } = require('mongodb');
const Comment = require('../models/comment');

module.exports.getComments = async (req, res) => {
    try {
        // {"_id" :yourObjectId}
        console.log("here1")
        const newComment = new Comment({author_id: "61cbc43e9f7044d9633b1369", author_username: "James", isParent: true, text: "This was amazing dooooooooood!", voteCount: 42})
        newComment.save((err, savedComment) => {
            if (err) return res.json(err);
            console.log('Successful');
            res.send(savedComment)
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports.insertComment = async (req, res) => {
    // create comment.
    // insert comment into proper post.
    try {
        const commentData = {
            ...req.body,
        }
        const comment = await Comment.create(commentData);
        console.log("SUCCESS, sending comment...", comment);
        const commentCleaned = {
        }
        res.send(commentCleaned);
    } catch (err) {
        console.log(err);
    }
}