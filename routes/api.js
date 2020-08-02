const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/question', (req, res, next) => {
    Question.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.post('/question', (req, res, next) => {
    
    console.log(req.body, 'req.body w post')

    Question.create(req.body)
        .then(data => res.json(data))
        .catch(next)
});

router.delete('/question/:id', (req, res, next) => {
    Question.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;