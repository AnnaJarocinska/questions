const express = require('express');
const verifyUser = require('../utils/verifyUser');
const router = express.Router();

router.all('*', verifyUser, async (req, res) => {

    try {
      const isUser = await User.findOne({key: req.cookies.key});
      if(isUser && !isUser.admin){
        res.send(isUser.name)
      } else { res.send('rejection')
      }
    } catch (err) {
       console.log(err)
      }
  })




module.exports = router;