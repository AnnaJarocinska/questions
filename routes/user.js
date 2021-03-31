const express = require('express');
const verifyUser = require('../utils/verifyUser');
const router = express.Router();
const User = require('../models/users');

router.all('/', verifyUser, async (req, res) => {

    try {
      const isUser = await User.findOne({key: req.cookies.key});
      if(isUser && !isUser.admin){
        res.send({userName: isUser.name, created: isUser.created, admin: isUser.admin})
      } else { return res.status(401).send({message: 'rejection'})
      }
    } catch (err) {
        res.status(401).json({
          err
      });
      }
  })

  // router.get('/game', verifyUser, async (req, res, next) => {
  //  try{
  //    const allQuestions = await Question.find({});
  //    res.send(allQuestions)
  //  }catch (err) {
  //   res.status(401).json({
  //     err
  // });
  // }
  // });

  router.post('/saveGame', async (req, res, next) => {
    try{
      const user = await User.findOne({key: req.cookies.key});
      let obj = {
                points: req.body.points,
                category: req.body.category,
                correctAnswers: req.body.correctAnswers,
                wrongAnswers: req.body.wrongAnswers,
                date: Date.now(),
              }
      user.games.push(obj)
      user.save()
    } catch (err) {
     res.status(401).json({
       err
   });
   }
   });

   router.post('/history', async (req, res, next) => {
    try{
      const user = await User.find({key: req.cookies.key});
      res.send(user[0].games)
    } catch (err) {
     res.status(401).json({
       err
   });
   }
   });

   router.post('/details/changePassword', async (req, res, next) => {
    try{
      const user = await User.find({key: req.cookies.key});
      console.log('chP')
      res.send(user[0].password)
    } catch (err) {
     res.status(401).json({
       err
   });
   }
   });



module.exports = router;