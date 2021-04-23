const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {

  const userNameTaken = await User.findOne({name: req.body.name});
  console.log(userNameTaken, 'userNameTaken')
    if (userNameTaken){
      return res.status(400).send('rejection')
    }            
    if (!userNameTaken) {
      const salt = await bcrypt.genSalt(10);
      const username = req.body.name
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        name: username,
        password: hashedPassword
      });
      newUser.save()
      res.send('created')
    }
});

module.exports = router;