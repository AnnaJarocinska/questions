const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/question', (req, res, next) => {
    Question.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/question', (req, res, next) => {
    if (req.body.action) {
        Question.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/question/:id', (req, res, next) => {
    Question.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;