const mongoose = require('mongoose');

const user = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String
});

module.exports = mongoose.model('User', user);
