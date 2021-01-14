const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

router.post('*', async (req, res, next) => {
    try{
    console.log('admin all', req.body)
    // console.log(req.body.name, 'req.body.name all w admin.js')
    const user = await User.findOne({name: req.body.name});
    const key = uuidv4();
    user.key = key;
      user.save();
      console.log(key, 'key admin')
    //   res.cookie('name', key)
    res.send(key)
    }catch (err) {
        console.log(err)
      }
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
    // next();
})

router.post('/login',  (req, res, next) => {
    console.log(req.body.name, 'req.body.name get w admin.js')
    console.log('admin post')
//     const user = await User.findOne({name: req.body.name});
//     const key = uuidv4();
//     user.key = key;
//       user.save();
//    res.send(key)
    // console.log(req.cookies.name, 'req.cookies.name w admin.js')
    // res.send(req.cookies.name)
});


module.exports = router;