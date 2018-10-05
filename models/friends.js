const mongoose = require('mongoose');
const Friend = require('./friends.js');
// const List = require('./lists.js');


const friendSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  birthdate: Number,
  notes: String
  // list: [Lists.schema]
})

const Friends = mongoose.model('Friend', friendSchema);

module.exports = Friends;