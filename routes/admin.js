const express = require('express');
const router = express.Router();
const User = require('../models/users');
const verifyAdmin = require('../utils/verifyAdmin');

router.all('*', verifyAdmin, async (req, res) => {

  try {
    const isAdmin = await User.findOne({key: req.cookies.key});
    if(isAdmin.admin){
      res.send(isAdmin.name)
    } else {return res.status(401).send('rejection')
    }
  } catch (err) {
      res.status(401).json({
        err
    });
    }
})

module.exports = router;