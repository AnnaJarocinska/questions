const express = require('express');
const router = express.Router();

router.all('*', async (req, res) => {

    try {
      const isUser = await User.findOne({key: req.cookies.key});
      if(isUser && !isUser.admin){
        res.send('userVeryfied')
      } else { res.send('rejection')
      }
    } catch (err) {
       console.log(err)
      }
  })




module.exports = router;