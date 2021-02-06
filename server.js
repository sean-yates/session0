const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport')



// We'll need to load the env vars
require('dotenv').config()
const port = process.env.PORT

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
const userRoutes = require('./routes/user');
const characterRoutes = require('./routes/characters');
const commentRoutes = require('./routes/comments');

// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware
app.use(session({
  secret: 'ShhPls!',
  resave: false,
  saveUninitialized: true
}));
// passport middleware here
app.use(passport.initialize());
app.use(passport.session());


// Mount Routers here
app.use('/', userRoutes);
app.use('/', characterRoutes);
app.use('/', commentRoutes);



app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
