const mongoose = require('mongoose');
const Friend = require('./friends.js');

const friendSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  birthdate: Number,
  notes: String
})

const Friends = mongoose.model('Friend', friendSchema);

module.exports = Friends;
