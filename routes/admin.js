const express = require('express');
const router = express.Router();
const User = require('../models/users');
const verify = require('../utils/verify');

router.all('*', verify, async (req, res) => {

  try {
    const isAdmin = await User.findOne({key: req.cookies.key});
    if(isAdmin.admin){
      res.send('adminVeryfied')
    } else { res.send('rejection')
    }
  } catch (err) {
     console.log(err)
    }
})

module.exports = router;