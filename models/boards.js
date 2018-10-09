const mongoose = require('mongoose');
const List = require('./lists.js');
// const FriendSchema = require('./friends').schema;

const boardSchema = mongoose.Schema({
  boardTitle: String,
  lists: [List.schema]
})

const Boards = mongoose.model('Board', boardSchema);

module.exports = Boards;