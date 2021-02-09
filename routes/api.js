const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.post('/questions', async (req, res, next) => {
   
    const requestedQuestions = await Question.find({continent: req.body.categories})

    try{
        if(requestedQuestions){
            console.log(requestedQuestions, 'requestedQuestions')
        }
    } catch (err){
        console.log(err)
    }
     
});

router.get('/question', async (req, res, next) => {
    Question.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get('/question', (req, res, next) => {
    Question.find({id: Math.floor(Math.random()*(5-0+1))})
        .then(data => res.json(data))
        .catch(next)
});

router.post('/question', (req, res, next) => {
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