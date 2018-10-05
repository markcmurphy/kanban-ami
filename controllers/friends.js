const express = require('express');
const router = express.Router();
const Friends = require('../models/friends.js');
const Lists = require('../models/lists.js');

// Index
router.get('/', (req, res) => {
  Friends.find((err, foundFriends) => {
    res.json(foundFriends);
  });
});

//Create friend
router.post('/', (req, res) => {
  console.log('1 ' + req.body.listId);
  Lists.findById(req.body.listId, (err, foundLists) => {
    console.log('2 ' + req.body.listId);

    Friends.create(req.body, (err, createdFriend) => {

      console.log('3 ' + createdFriend);

      // console.log('2 ' + createdFriend);
      createdFriend.save((err, data) => {});
      console.log('foundLists' + foundLists);
      foundLists.friends.push(createdFriend);
      foundLists.save((err, data) => {});
      res.json(createdFriend);
    });
  });
});

//delete friend
router.delete('/:id', (req, res) => {
  Friends.findByIdAndRemove(req.params.id, (err, deletedFriend) => {
    res.json(deletedFriend);
  })
})

module.exports = router;