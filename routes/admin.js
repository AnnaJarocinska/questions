const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.all('*', async (req, res) => {

  try {
    const isAdmin = await User.findOne({key: req.cookies.key});
    if(isAdmin){
      res.send('veryfied')
    } else { res.send('rejection')
    }
  } catch (err) {
     console.log(err)
    }
})

module.exports = router;