const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.post('/questions', async (req, res) => {
    const requestedQuestions = req.body.mode === 'Random10' ?
    await Question.find({continent: {$in: req.body.categories }}).limit(2) :
    await Question.find({continent: {$in: req.body.categories }});
 try{
        if(requestedQuestions){
            res.send(requestedQuestions);
        }
    } catch (err){
        res.status(400).json({
            err
        })
    }  
});

router.post('/capitalsList', async (req, res, next) => {
    const capitalsList = await Question.find({}) 
    try{
        if(capitalsList){
            res.send(capitalsList);
        }
    } catch (err){
        res.status(400).json({
            err
        })
    }    
});

router.post('/checkAnswer', async (req, res, next) => {

    const requestedQuestion = await Question.find({_id: req.body.questionId})

    try{
        if(requestedQuestion[0].goodAnswer === req.body.userAnswer){
            res.send('correctAnswer')
        } else {
            res.send('wrongAnswer')
        }
    } catch (err){
        res.status(400).json({
            err
        })
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