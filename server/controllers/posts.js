const { WriteError } = require('mongodb');
const Post = require('../models/post');

module.exports.index = async (req, res) => {
    try {
        const posts = await Post.find({});
        console.log("SUCCESS, sending posts...");
        console.log(posts);
        const postsCleaned = posts.map((post) => {
            return {
                type: post.type,
                title: post.title,
                content: post.textContent,
                comments: post.comments,
                post_id: post._id,
                author_id: post.author_id,
                author_username: post.author_username
            }
        })
        console.log(postsCleaned);
        res.send(postsCleaned);
    } catch (err) {
        console.log(err);
    }
}

module.exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id);
        console.log("SUCCESS, sending post...");
        const postCleaned = {
            type: post.type,
            title: post.title,
            content: post.textContent,
            comments: post.comments,
            post_id: post._id,
            author_id: post.author_id,
            author_username: post.author_username
        }
        res.send(postCleaned);
    } catch (err) {
        console.log(err);
    }
}


module.exports.insertPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        console.log("SUCCESS, sending post...", post);
        const postCleaned = {
            type: post.type,
            title: post.title,
            content: post.textContent,
            comments: post.comments,
            post_id: post._id,
            author_id: post.author_id,
            author_username: post.author_username
        }
        res.send(postCleaned);
    } catch (err) {
        console.log(err);
    }
}

module.exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.post_id);
        console.log("DELETE SUCCESS...");
        res.send("Successful delete.")
    } catch (err) {
        console.log(err);
    }  
}