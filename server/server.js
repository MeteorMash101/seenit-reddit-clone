const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
// CORS config.
const corsOptions = { 
  origin: '*', 
  credentials: true,
  optionSuccessStatus: 200,
}
// process.env's config.env file will contain PORT & other private credentials.
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 5000;
// get driver connection (from mongodb ATLAS cloud :^))
const dbo = require("./db/conn");

// Passport/Express Sessions for User authentication & authorization.
const session = require('express-session');
const passport = require('passport');

// import routes...
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');
// import User model...
const User = require('./models/user')
const seedDB = require('./seeds/seed');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev')) // console logs requests for debugging. (NOTE: has to be right after app...)
app.use(express.json());
app.use(cors(corsOptions));

// Configure express-sessions middleware
const sessionConfig = session({
  secret: 'youmustbearedditor',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
})
app.use(sessionConfig);
app.use(bodyParser.urlencoded({ extended: false })); // We are parsing URL-encoded data from the body

// Passport
app.use(passport.initialize()); // Middleware to use Passport with Express
app.use(passport.session()); // Needed to use express-session with passport


app.use( (req, res, next) => { // [Debugging]
  console.log('req.session:', req.session);
  console.log('req.user:', req.user); // not working here...
  next();
});

// Routing middleware
app.use('/', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);



// Start listening for requests... 
// callback: try to connect to mongodb atlas db after server starts
app.listen(port, async () => {
  try {
    await dbo.connectDB();
  } catch (err) {
    console.log("db connection failed.", err);
  }
  // No errors, we are good to go!
  console.log(`Server is running on port: ${port}`);
  // await seedDB();
  // console.log(`Seeds planted.`);
});