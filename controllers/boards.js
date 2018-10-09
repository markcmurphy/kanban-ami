const express = require('express');
const router = express.Router();
const Boards = require('../models/boards.js');

// Index
router.get('/', (req, res) => {
  Boards.find((err, foundBoards) => {
    res.json(foundBoards);
  });
});

//Create Board
router.post('/', (req, res) => {
  console.log(req.body);
  Boards.create(req.body, (err, createdBoard) => {
    res.json(createdBoard);
  });
});

//delete Board
router.delete('/:id', (req, res) => {
  Boards.findByIdAndRemove(req.params.id, (err, deletedBoard) => {
    res.json(deletedBoard);
  })
})

module.exports = router;