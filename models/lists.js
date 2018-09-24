const mongoose = require('mongoose');
const List = require('./lists.js');

const listSchema = mongoose.Schema({
  title: String,
  friends: String
})

const Lists = mongoose.model('List', listSchema);

module.exports = Lists;
