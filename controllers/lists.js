const express = require('express');
const router = express.Router();
const Lists = require('../models/lists.js');
const Boards = require('../models/boards.js');


// Index
router.get('/', (req, res) => {
  Lists.find((err, foundLists) => {
    res.json(foundLists);
  });
});

//Create List
router.post('/', (req, res) => {
  console.log('1 ' + req.body.boardId);
  Boards.findById(req.body.boardId, (err, foundBoards) => {
    console.log('2 ' + req.body.boardId);

    Lists.create(req.body, (err, createdList) => {

      console.log('3 ' + createdList);

      // console.log('2 ' + createdFriend);
      createdList.save((err, data) => {});
      console.log('foundBoards' + foundBoards);
      foundBoards.lists.push(createdList);
      foundBoards.save((err, data) => {});
      res.json(createdList);
    });
  });
});

//delete List
router.delete('/:id', (req, res) => {
  Lists.findByIdAndRemove(req.params.id, (err, deletedList) => {
    res.json(deletedList);
  })
})

module.exports = router;