const User = require('../models/user');

module.exports.login = async (req, res) => {
    console.log('Successful login, welcome back!');
    console.log("reqbody", req.body)
    res.send("done.")
}

module.exports.register = (req, res) => {
    const { username, password } = req.body
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error!')
            res.status(400).send(err);
        } else if (user) {
            res.status(400).send(`Sorry, already a user with the username: ${username}`);
        } else {
            const newUser = new User({username, password})
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                console.log('Successful new user sign up & saved to db, sending back userInfo.');
                res.send(savedUser)
            })
        }
    })
}

module.exports.logout = (req, res) => {
    if (req.user) {
        req.logout()
        console.log("Successfully logged out.")
    } else {
        console.log("ERROR: No user to log out...")
    }
}