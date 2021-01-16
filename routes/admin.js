const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

router.all('*', async (req, res) => {

    try{
      console.log('redirect na admin udany')

    // const user = await User.findOne({name: req.body.name});
    // const key = uuidv4();
    // user.key = key;
    // user.save();
    // res.send(key)
   
    }catch (err) {
        console.log(err)
      }

})




module.exports = router;