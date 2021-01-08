const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Keys = require('../models/keys');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {

  const userNameNotAvailable = await User.findOne({name: req.body.name});
            if (userNameNotAvailable){
                res.send('rejection')
            }
            if (!userNameNotAvailable) {
              res.send('created')
              const salt = await bcrypt.genSalt(10);
              let userid = 3
              let username = req.body.name
              let hashedPassword = await bcrypt.hash(req.body.password, salt);
              const newUser = new User({
                id: userid,
                name: username,
                password: hashedPassword,
              });
              newUser.save()
            }
});

module.exports = router;