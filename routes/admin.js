const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

router.all('*', async (req, res, next) => {
//     const user = await User.findOne({name: req.body.name});
//     const key = uuidv4();
//     user.key = key;
//       user.save();
//    res.send(key)
    // if(req.session.admin){
    //     // if(req.cookie.name === 'admin'){
    //     console.log('adminnnnnnn', req.session.admin);
       
    // }
    // if(!req.session.admin){
    // // if(!req.cookie.name === 'admin'){
    //     console.log('no admin');
    //     return;
    // }
    next();
})

router.get('/', async (req, res, next) => {

    const user = await User.findOne({name: req.body.name});
    const key = uuidv4();
    user.key = key;
      user.save();
   res.send(key)
    // console.log(req.cookies.name, 'req.cookies.name w admin.js')
    // res.send(req.cookies.name)
});


module.exports = router;