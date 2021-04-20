const express = require('express');
const verifyUser = require('../utils/verifyUser');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users');

router.all('/', verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({key: req.cookies.key});
    if (user && !user.admin) {
      res.status(200).send({userName: user.name, created: user.created, admin: user.admin})
    } else { 
        return res.status(401).send({message: 'rejection'})
      }
  } catch (err) {
      res.status(401).json({err});
    }
  });

router.post('/saveGame', verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({key: req.cookies.key});
    const obj = {
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

router.post('/history', verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({key: req.cookies.key});
    res.status(200).send(user.games)
  } catch (err) {
    res.status(401).json({err});
   }
});

router.post('/details/changePassword', verifyUser, async (req, res) => {
  console.log(req.body.password, 'rbpassPRZED')
  try{
    console.log(req.body.password, 'rbpass')
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(req.body.password, salt);
    const filter = { key: req.cookies.key };
    const update = { password: newPassword };
    const change = await User.findOneAndUpdate(filter, update)
    res.send('yes!');
    change();
  
    } 
  catch (err) {
     res.status(401).json({err});
   }
});

module.exports = router;