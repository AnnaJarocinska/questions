const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {

    const user = await User.findOne({name: req.body.name});
    if (!user){
    // res.send('rejection')
    return res.status(400).json({
      err: "User not exist"
    })}
    
    const passwordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!passwordCorrect){
        // res.send('rejection')
        return res.status(400).json({
         err: "Invalid password"
    })}
    
    // if(user, passwordCorrect){
    //     const key = uuidv4();
    //     console.log(key, 'keyyyyyyyy')
    //     const newKey = new User({
    //         key: newKey,
    //       });
    //       newKey.save();
    // }

    if (user.admin){
        console.log(req.sessionID, 'JJJJJJEEEEEEEEESSSSSSSSSSSSSSTTTTTTT', req.session.id)
        req.session.admin = 1;   
        req.sessionID = 'admin123'
        res.cookie('name', 'admin');
        res.send(req.sessionID);
        res.redirect('/admin');
    }
             
    if (!user.admin){
        req.session.user = 2;
        res.cookie('name', 'user')
        res.redirect('/user');
    }
})

module.exports = router;