const express = require('express');
const verifyUser = require('../utils/verifyUser');
const router = express.Router();
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

  router.post('/saveGame', async (req, res, next) => {
    try{
      
      const filter = { key: req.cookies.key };
      const update = { games: [{
        points: req.body.points,
        category: req.body.category,
        date: Date.now(),
      }] };
let trr = await User.findOneAndUpdate(filter, update);
trr = await User.findOne(filter);

    } catch (err) {
     res.status(401).json({
       err
   });
   }
   });



module.exports = router;