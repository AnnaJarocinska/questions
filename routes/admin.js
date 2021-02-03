const express = require('express');
const router = express.Router();
const User = require('../models/users');
const verifyAdmin = require('../utils/verifyAdmin');

router.all('*', verifyAdmin, async (req, res) => {

  try {
    const isAdmin = await User.findOne({key: req.cookies.key});
    if(isAdmin.admin){
      res.send(isAdmin.name)
    } else { res.send('rejection')
    }
  } catch (err) {
     console.log(err)
    }
})

module.exports = router;