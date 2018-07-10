const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.listen(3000, () => {
  console.log('listening');
});

app.use(express.static('public'));



mongoose.connect('mongodb://localhost:27017/kanban-ami');

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
