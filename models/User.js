const mongoose = require('mongoose');
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('password-local-mongoose');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise; // Dep. Warning Workaround. Remove in Mongoose 5


const userSchema = new Schema({
  email: {
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please Supply an email address'
  },
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true
  }
});

module.exports = mongoose.model('User', userSchema);
