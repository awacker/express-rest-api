const mongoose = require('mongoose');

const customer = new mongoose.Schema({
  firstName: String,
  lastName: String,
  account: String,
  email: String,
  company: String
});

module.exports = mongoose.model('Customer', customer);
