const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/', (req, res, next) => {
    Users.find({})
        .then(data => res.json(data))
        .catch(next)
});

// router.post('/users', (req, res, next) => {

//     Users.create(req.body)
//         .then(data => res.json(data))
//         .catch(next)
// });

router.delete('/:id', (req, res, next) => {
    Users.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;