const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'));

const friendsController = require('./controllers/friends.js');
app.use('/friends', friendsController);

const listsController = require('./controllers/lists.js');
app.use('/lists', listsController);


app.listen(3000, () => {
  console.log('listening');
});

mongoose.connect('mongodb://localhost:27017/kanban-ami');

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
