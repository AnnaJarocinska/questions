const express = require('express');
const verifyUser = require('../utils/verifyUser');
const router = express.Router();
const Question = require('../models/question');
const User = require('../models/users');

router.all('/', verifyUser, async (req, res) => {

    try {
      const isUser = await User.findOne({key: req.cookies.key});
      if(isUser && !isUser.admin){
        res.send(isUser.name)
      } else { return res.status(401).send('rejection')
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

  router.get('/saveGame', async (req, res, next) => {
    try{
      // const allQuestions = await Question.find({});
      // res.send(allQuestions)
      console.log(req.body, 'req.body w user/savegame')
    }catch (err) {
     res.status(401).json({
       err
   });
   }
   });



module.exports = router;