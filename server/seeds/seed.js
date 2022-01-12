const Post = require('../models/post');

const seedDB = async () => {
	// Users
	

	// Posts 
	await Post.deleteMany({});
    for (let i = 0; i < 5; i++) {
			const post = new Post({
					postType: 'Text',
					title: 'Random Title Of Text Post',
					content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					voteCount: 1
					// author:
					// comments: 
					// subreddit: 
					// creationDate: 
			})
			await post.save();
    }
}


module.exports = seedDB;