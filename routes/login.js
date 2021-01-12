const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {
    
    const user = await User.findOne({name: req.body.name});
    const passwordCorrect = await bcrypt.compare(req.body.password, user.password);
// console.log(user, 'user', passwordCorrect,'pass')
    try{
    if (!user)
    {
    // res.send('rejection')
    // return res.status(400).json({
    //   err: "User not exist"
    // })   
  return console.log('user not exist')
}
}catch (err) {
    // res.status(400).json({
    //   err
    // });
    console.log(err)
  }

try{
    if (!passwordCorrect)
    {
        return console.log('invalid password')
    //     res.send('rejection')
    //     return res.status(400).json({
    //      err: "Invalid password"
    // })
    
} 
 }catch (err) {
    // res.status(400).json({
    //   err
    // });
    console.log(err)
  }

    // else if(user, passwordCorrect){
    //     const key = uuidv4();
    //     console.log(key, 'keyyyyyyyy')
    //     const newKey = new User({
    //         key: key,
    //       });
    //       newKey.save();
    // }

    
try{
     if (user.admin){
        console.log(req.sessionID, 'JJJJJJEEEEEEEEESSSSSSSSSSSSSSTTTTTTT', req.session.id)
        req.session.admin = 1;   
        req.sessionID = 'admin123'
        res.cookie('name', 'admin');
        // res.send(req.sessionID);
        res.redirect('/admin');
    }
}catch (err) {
    console.log(err)
  }
 
try{
    if (!user.admin){
        req.session.user = 2;
        res.cookie('name', 'user')
        res.redirect('/user');
    
}
    }catch (err) {
        res.status(400).json({
          err
        });
      }


})

module.exports = router;