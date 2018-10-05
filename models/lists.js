const mongoose = require('mongoose');
// const List = require('./lists.js');
const Friend = require('./friends.js');
// const FriendSchema = require('./friends').schema;

const listSchema = mongoose.Schema({
  title: String,
  friends: [Friend.schema]
})

const Lists = mongoose.model('List', listSchema);

module.exports = Lists;