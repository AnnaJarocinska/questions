const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/', (req, res, next) => {
    Users.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.delete('/:id', (req, res, next) => {
    Users.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
});

router.post('/', async (req, res) => {
    try{
    const user = await User.findOne({
        key: req.body.key
    });
        res.send(user)
} catch (err) {
    console.log(err,'err')
  }
})

module.exports = router;