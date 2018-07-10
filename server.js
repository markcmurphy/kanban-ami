const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.listen(3000, () => {
  console.log('listening');
});

app.use(express.static('public'));

const friendsController = require('./controllers/friends.js');
app.use('/friends', friendsController);


mongoose.connect('mongodb://localhost:27017/kanban-ami');

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
