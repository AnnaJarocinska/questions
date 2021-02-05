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
    if (!user) {
      return res.status(400).send('Invalid user name')
    }
} catch (err) {
    res.status(400).json({
      err
    });
  }

try {
    if (!passwordCorrect) {
      return res.status(400).send('Invalid password')    
      } 
} catch (err) {
    res.status(400).json({
      err
  });
      }

try {
    if (user, passwordCorrect) {
      const key = uuidv4();
      user.key = key;
      user.save();

        if (user.admin){
          res
          .cookie('key', key)
          .cookie('apply', '1')
          .redirect('/admin')
          }
        if (!user.admin){
          res
          .cookie('key', key)
          .cookie('apply', '2')
          .redirect('/user')
          }
    }
} catch (err) {
    res.status(400).json({
      err
  });
  }
})

module.exports = router;