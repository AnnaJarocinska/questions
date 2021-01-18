const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {
    
    const user = await User.findOne({name: req.body.name});
    const userPassword = user !== null ? user.password : ''; 
    const passwordCorrect = await bcrypt.compare(req.body.password, userPassword);

try {
    if (!user){
      return console.log('user not exist')
      }
} catch (err) {
    console.log(err)
  }

try {
    if (!passwordCorrect){
      return console.log('invalid password')    
      } 
} catch (err) {
    console.log(err)
      }
try {
    if(user, passwordCorrect){
      const key = uuidv4();
      user.key = key;
      user.save();

        if(user.admin){
          res
          .cookie('key', key, { path: '/admin'})
          .redirect('/admin')
          }
        if(!user.admin){
          res
          .cookie('key', key)
          .redirect('/user')
          }
    }
} catch (err) {
    console.log(err)
  }
})

module.exports = router;