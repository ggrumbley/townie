const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

const mongoDB = 'mongodb://localhost/townie-dev'

if (process.env.NODE_ENV === 'production') {
  mongoDB = process.env.MONGODB_URI
}

// Connect to our Database and handle an bad connections
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises Dep. in M-5
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!

// Import Models
require('./models/Store');
require('./models/User');

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
