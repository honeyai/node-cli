const mongoose = require('mongoose');

const schema = mongoose.Schema({
  Username: {type: String},
  Name: {type: String},
  Password: {type: String},
});

module.exports = mongoose.model('Schema', schema);