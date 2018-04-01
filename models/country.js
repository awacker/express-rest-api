const mongoose = require('mongoose');

const country = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Country', country);
