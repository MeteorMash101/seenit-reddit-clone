// "User" model/schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: {
        type: String,
        required: false, // temp
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    karma: Number,
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
    // NOTE: Keeping track of these will help on the frontend.
    postsUpvoted: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    postsDownvoted: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    commentsUpvoted: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    commentsDownvoted: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    // In the main page, we load up the current User's subreddits, and show the feed accordingly.
    subsJoined: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subreddit'
        }
    ],
    joinDate: { 
        type: Date, 
        default: Date.now 
    }
});

// Define schema methods
UserSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Export 'User' in a usable format for our passport code.
UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema);