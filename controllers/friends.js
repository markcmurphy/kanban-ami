const express = require('express');
const router = express.Router();
const Friends = require('../models/friends.js');

// Index
router.get('/', (req, res)=> {
  Friends.find((err, foundFriends)=>{
    res.json(foundFriends);
  });
});

//Create friend
router.post('/', (req, res)=>{
  console.log(req.body);
  Friends.create(req.body, (err, createdFriend)=>{
    res.json(createdFriend);
  });
});

//delete friend
router.delete('/:id', (req, res)=>{
  Friends.findByIdAndRemove(req.params.id, (err, deletedFriend)=>{
    res.json(deletedFriend);
  })
})

module.exports = router;
