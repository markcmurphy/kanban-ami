const express = require('express');
const router = express.Router();
const Friends = require('../models/friends.js');

// Index
router.get('/', (req, res)=> {
  Friends.find((err, foundFriends)=>{
    res.json(foundFriends);
  });
});
