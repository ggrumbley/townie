const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });



// Connect to our Database and handle an bad connections
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises Dep. in M-5
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!

// Import Models
require('./models/Store');
require('./models/User');
require('./models/Review');

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → http://localhost:${server.address().port}`);
});
