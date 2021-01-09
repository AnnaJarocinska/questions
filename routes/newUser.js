const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {

  const userNameNotAvailable = await User.findOne({name: req.body.name});
            if (userNameNotAvailable){
                res.send('rejection')
            }
            if (!userNameNotAvailable) {
              const salt = await bcrypt.genSalt(10);
              let username = req.body.name
              let hashedPassword = await bcrypt.hash(req.body.password, salt);
              const newUser = new User({
                name: username,
                password: hashedPassword,
              });
              newUser.save()
              res.send('created')
            }
});

module.exports = router;