const express = require('express');
const verifyUser = require('../utils/verifyUser');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users');

router.all('/', verifyUser, async (req, res) => {
  try {
      const isUser = await User.findOne({key: req.cookies.key});
      if (isUser && !isUser.admin) {
        res.send({userName: isUser.name, created: isUser.created, admin: isUser.admin})
      } else { 
        return res.status(401).send({message: 'rejection'})
      }
  } catch (err) {
      res.status(401).json({err});
      }
  });

router.post('/saveGame', async (req, res) => {
  try {
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
    res.status(401).json({err});
   }
  });

router.post('/history', async (req, res) => {
  try {
    const user = await User.find({key: req.cookies.key});
    res.send(user[0].games)
  } catch (err) {
    res.status(401).json({err});
   }
});

router.post('/details/changePassword', async (req, res) => {
  try{
    let salt = await bcrypt.genSalt(10);
    let newPassword = await bcrypt.hash(req.body.password, salt);
    const filter = { key: req.cookies.key };
    const update = { password: newPassword };
    let change = await User.findOneAndUpdate(filter, update);
    change();
    if (err) {
      console.log('ERROR');
    } else {
      console.log('success');
        }
    } 
  catch (err) {
     res.status(401).json({err})
   }
});

module.exports = router;