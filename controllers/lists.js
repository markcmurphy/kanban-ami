const express = require('express');
const router = express.Router();
const Lists = require('../models/lists.js');

// Index
router.get('/', (req, res)=> {
  Lists.find((err, foundLists)=>{
    res.json(foundLists);
  });
});

//Create List
router.post('/', (req, res)=>{
  console.log(req.body);
  Lists.create(req.body, (err, createdList)=>{
    res.json(createdList);
  });
});

//delete List
router.delete('/:id', (req, res)=>{
  Lists.findByIdAndRemove(req.params.id, (err, deletedList)=>{
    res.json(deletedList);
  })
})

module.exports = router;
