// create route that front-end can request data from
const express = require('express');
// require the data that is requested by the front-end code
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// tell heroku to use port process environment
const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// parse incoming JSON data
app.use(express.json());

// tell Express.js app to intercept POST request before it gets to callback fxn; parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// establish Express.js middleware to instruct server to make certain files readily available
app.use(express.static('public'));

// app uses router set up in apiRoutes or HTML routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// chain listen() method onto our server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});